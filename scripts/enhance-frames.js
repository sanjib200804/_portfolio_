const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TOTAL_FRAMES = 300;
const CONCURRENCY = 6;
const INPUT_DIR = path.join(__dirname, '..', 'ezgif-1594fb405f1e0682-jpg');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'frames');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function processFrame(index) {
  const num = String(index).padStart(3, '0');
  const inputFile = path.join(INPUT_DIR, `ezgif-frame-${num}.jpg`);
  const outputFile = path.join(OUTPUT_DIR, `ezgif-frame-${num}.jpg`);

  if (!fs.existsSync(inputFile)) {
    console.warn(`Input file missing: ${inputFile}`);
    return;
  }

  await sharp(inputFile)
    // 1. Crop 42px top and bottom letterbox bars
    .extract({ left: 0, top: 42, width: 1280, height: 636 })
    // 2. High-fidelity Lanczos3 upscale to Full HD widescreen
    .resize(1920, 954, {
      kernel: sharp.kernel.lanczos3,
      fastShrinkOnLoad: false
    })
    // 3. Unsharp-mask edge sharpening for crisp facial features & glasses
    .sharpen({
      sigma: 1.1,
      m1: 1.2,
      m2: 2.2
    })
    // 4. Subtle contrast recalibration to eliminate dark compression blocks
    .linear(1.06, -5)
    // 5. MozJPEG 95% high-bitrate encoding
    .jpeg({
      quality: 95,
      mozjpeg: true,
      trellisQuantisation: true,
      overshootDeringing: true
    })
    .toFile(outputFile);
}

async function run() {
  console.log(`Starting enhancement of ${TOTAL_FRAMES} frames...`);
  const startTime = Date.now();

  let currentIndex = 1;
  const workers = Array.from({ length: CONCURRENCY }, async (_, workerId) => {
    while (currentIndex <= TOTAL_FRAMES) {
      const idx = currentIndex++;
      try {
        await processFrame(idx);
        if (idx % 25 === 0 || idx === TOTAL_FRAMES) {
          console.log(`[Worker ${workerId}] Processed ${idx}/${TOTAL_FRAMES} frames`);
        }
      } catch (err) {
        console.error(`Error processing frame ${idx}:`, err);
      }
    }
  });

  await Promise.all(workers);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`Completed enhancing all ${TOTAL_FRAMES} frames in ${elapsed}s!`);
}

run();
