const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const QUALITY = 85;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Skip if image is already optimised
  if (metadata.size < 100000) return;

  // Resize if image is too large
  if (metadata.width > 2048) {
    await image
      .resize(2048, null, { withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(filePath + '.optimized');
  } else {
    await image
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(filePath + '.optimized');
  }

  // Replace original with optimized version
  await fs.unlink(filePath);
  await fs.rename(filePath + '.optimized', filePath);

  console.log(`Optimized: ${filePath}`);
}

async function walkDir(dir) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.stat(filePath);
    
    if (stats.isDirectory()) {
      await walkDir(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

// Run optimization
console.log('Starting image optimization...');
walkDir(PUBLIC_DIR)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error); 