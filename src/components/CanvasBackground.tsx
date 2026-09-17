'use client';

import { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 180;

function getFrameUrl(index: number): string {
  const frameNumber = String(index + 1).padStart(3, '0');
  return `/frames/frame-${frameNumber}.webp`;
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastRenderedIndexRef = useRef<number>(-1);
  const isLoopingRef = useRef<boolean>(false);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);

    const updateCanvasDimensions = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      renderFrame(Math.round(currentFrameRef.current), true);
    };

    const drawCover = (img: HTMLImageElement) => {
      if (!canvas || !ctx) return;
      const imgWidth = img.naturalWidth || 1920;
      const imgHeight = img.naturalHeight || 1080;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const hRatio = canvasWidth / imgWidth;
      const vRatio = canvasHeight / imgHeight;
      const ratio = Math.max(hRatio, vRatio);

      const renderWidth = Math.round(imgWidth * ratio);
      const renderHeight = Math.round(imgHeight * ratio);
      const renderX = Math.round((canvasWidth - renderWidth) / 2);
      const renderY = Math.round((canvasHeight - renderHeight) / 2);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight, renderX, renderY, renderWidth, renderHeight);
    };

    const findNearestLoadedFrame = (targetIdx: number): HTMLImageElement | null => {
      const frames = imagesRef.current;
      if (frames[targetIdx]?.complete && frames[targetIdx]?.naturalWidth) {
        return frames[targetIdx];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const left = targetIdx - offset;
        if (left >= 0 && frames[left]?.complete && frames[left]?.naturalWidth) {
          return frames[left];
        }
        const right = targetIdx + offset;
        if (right < TOTAL_FRAMES && frames[right]?.complete && frames[right]?.naturalWidth) {
          return frames[right];
        }
      }
      return null;
    };

    const renderFrame = (index: number, force = false) => {
      const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
      if (!force && clampedIndex === lastRenderedIndexRef.current) return;

      const img = findNearestLoadedFrame(clampedIndex);
      if (img) {
        drawCover(img);
        lastRenderedIndexRef.current = clampedIndex;
      }
    };

    // Preload frame 1 immediately
    const firstImg = new window.Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      renderFrame(0, true);
    };

    // Lazy load the remaining frames progressively
    const preloadOtherFrames = () => {
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new window.Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          imagesRef.current[i] = img;
          if (Math.round(currentFrameRef.current) === i) {
            renderFrame(i, true);
          }
        };
      }
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(preloadOtherFrames);
      } else {
        setTimeout(preloadOtherFrames, 150);
      }
    }

    const tick = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.12;
        renderFrame(Math.round(currentFrameRef.current));
        animationFrameIdRef.current = requestAnimationFrame(tick);
      } else {
        currentFrameRef.current = targetFrameRef.current;
        renderFrame(Math.round(currentFrameRef.current));
        isLoopingRef.current = false;
      }
    };

    const startLoop = () => {
      if (!isLoopingRef.current) {
        isLoopingRef.current = true;
        animationFrameIdRef.current = requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollY / maxScroll)) : 0;
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      startLoop();
    };

    updateCanvasDimensions();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateCanvasDimensions, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCanvasDimensions);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen block pointer-events-none z-0 bg-[#050505]"
    />
  );
}
