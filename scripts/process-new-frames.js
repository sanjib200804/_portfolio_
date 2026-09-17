const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TOTAL_FRAMES = 180;
const CONCURRENCY = 6;
const INPUT_DIR = path.join(__dirname, '..', 'ezgif-78455f1f74dd3ed0-png-split');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'frames');

// Remove existing frames
if (fs.existsSync(OUTPUT_DIR)) {
  const existingFiles = fs.readdirSync(OUTPUT_DIR);
  for (const file of existingFiles) {
    fs.unlinkSync(path.join(OUTPUT_DIR, file));
  }
  console.log(`Removed ${existingFiles.length} existing files from ${OUTPUT_DIR}`);
} else {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function processFrame(index) {
  const num = String(index).padStart(3, '0');
  const inputFile = path.join(INPUT_DIR, `ezgif-frame-${num}.png`);
  const outputFile = path.join(OUTPUT_DIR, `frame-${num}.webp`);

  if (!fs.existsSync(inputFile)) {
    console.warn(`Input missing: ${inputFile}`);
    return;
  }

  await sharp(inputFile)
    .webp({ quality: 96, effort: 4 })
    .toFile(outputFile);
}

async function run() {
  console.log(`Converting ${TOTAL_FRAMES} high-resolution frames to WebP...`);
  const startTime = Date.now();

  let currentIndex = 1;
  const workers = Array.from({ length: CONCURRENCY }, async (_, workerId) => {
    while (currentIndex <= TOTAL_FRAMES) {
      const idx = currentIndex++;
      try {
        await processFrame(idx);
        if (idx % 30 === 0 || idx === TOTAL_FRAMES) {
          console.log(`[Worker ${workerId}] Converted ${idx}/${TOTAL_FRAMES}`);
        }
      } catch (err) {
        console.error(`Error on frame ${idx}:`, err);
      }
    }
  });

  await Promise.all(workers);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`Finished converting all ${TOTAL_FRAMES} frames in ${elapsed}s!`);
}

run();
