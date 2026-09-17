import os
import cv2
import numpy as np

def remove_logo_from_frames():
    frames_dir = 'public/frames'
    total_frames = 180
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    
    print(f"Starting logo removal for {total_frames} frames...")
    
    for i in range(1, total_frames + 1):
        filename = f"frame-{i:03d}.webp"
        filepath = os.path.join(frames_dir, filename)
        
        if not os.path.exists(filepath):
            print(f"Warning: {filepath} not found, skipping.")
            continue
            
        img = cv2.imread(filepath)
        if img is None:
            print(f"Warning: failed to read {filepath}, skipping.")
            continue
            
        mask = np.zeros(img.shape[:2], dtype=np.uint8)
        
        # Bounding box around the watermark logo: x in [1695, 1785], y in [855, 945]
        roi = img[855:945, 1695:1785]
        gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
        bg = np.median(gray)
        
        roi_mask = (gray > bg + 10).astype(np.uint8) * 255
        roi_mask = cv2.dilate(roi_mask, kernel, iterations=2)
        mask[855:945, 1695:1785] = roi_mask
        
        # Inpaint using Telea fast marching algorithm
        inpainted = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
        
        # Overwrite with high quality WebP
        cv2.imwrite(filepath, inpainted, [cv2.IMWRITE_WEBP_QUALITY, 92])
        
        if i % 30 == 0 or i == total_frames:
            print(f"Processed {i}/{total_frames} frames...")

    print("All frames successfully processed and watermark removed!")

if __name__ == "__main__":
    remove_logo_from_frames()
