const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = 'public/images';
const QUALITY = 75;

async function optimizeImages() {
  try {
    const files = await fs.readdir(IMAGES_DIR);
    console.log('🖼️  Starting image optimization...');
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        continue;
      }

      const inputPath = path.join(IMAGES_DIR, file);
      const tempPath = path.join(IMAGES_DIR, `temp-${file}`);
      const webpPath = path.join(IMAGES_DIR, file.replace(/\.[^.]+$/, '.webp'));
      
      try {
        // Create WebP version
        await sharp(inputPath)
          .webp({ quality: QUALITY })
          .toFile(webpPath);
        
        // Optimize original format
        await sharp(inputPath)
          .jpeg({ quality: QUALITY, mozjpeg: true })
          .toFile(tempPath);
        
        // Replace original with optimized version
        await fs.unlink(inputPath);
        await fs.rename(tempPath, inputPath);
        
        console.log(`✓ Optimized: ${file} (and created WebP version)`);
      } catch (err) {
        console.error(`❌ Error optimizing ${file}:`, err.message);
        // Clean up temp file if it exists
        try {
          await fs.access(tempPath);
          await fs.unlink(tempPath);
        } catch (e) {
          // Temp file doesn't exist, ignore
        }
      }
    }
    
    console.log('✨ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error reading images directory:', error.message);
    process.exit(1);
  }
}

optimizeImages(); 