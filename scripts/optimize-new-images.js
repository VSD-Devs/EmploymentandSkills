const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const chokidar = require('chokidar');

const IMAGES_DIR = 'public/images';
const QUALITY = 75;
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  if (!SUPPORTED_FORMATS.includes(ext)) {
    return;
  }

  const filename = path.basename(imagePath);
  const tempPath = path.join(IMAGES_DIR, `temp-${filename}`);
  const webpPath = path.join(IMAGES_DIR, filename.replace(/\.[^.]+$/, '.webp'));

  try {
    // Check if image is already optimized by checking for WebP version
    try {
      await fs.access(webpPath);
      console.log(`⏭️  Skipping ${filename} (already optimized)`);
      return;
    } catch (e) {
      // WebP doesn't exist, proceed with optimization
    }

    // Create WebP version
    await sharp(imagePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    // Optimize original format
    await sharp(imagePath)
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(tempPath);

    // Replace original with optimized version
    await fs.unlink(imagePath);
    await fs.rename(tempPath, imagePath);

    console.log(`✓ Optimized: ${filename} (and created WebP version)`);
  } catch (err) {
    console.error(`❌ Error optimizing ${filename}:`, err.message);
    // Clean up temp file if it exists
    try {
      await fs.access(tempPath);
      await fs.unlink(tempPath);
    } catch (e) {
      // Temp file doesn't exist, ignore
    }
  }
}

// Check if running in watch mode
const watchMode = process.argv.includes('--watch');

if (watchMode) {
  console.log('👀 Watching for new images...');
  
  // Initialize watcher
  const watcher = chokidar.watch(IMAGES_DIR, {
    ignored: [
      /(^|[\/\\])\../, // Ignore dot files
      '**/*.webp',     // Ignore WebP files
      '**/temp-*'      // Ignore temp files
    ],
    persistent: true
  });

  // Add event listeners
  watcher
    .on('add', path => {
      console.log(`📸 New image detected: ${path}`);
      optimizeImage(path);
    })
    .on('change', path => {
      console.log(`🔄 Image changed: ${path}`);
      optimizeImage(path);
    })
    .on('error', error => console.error(`Watcher error: ${error}`));

} else {
  // One-time optimization of new images
  console.log('🖼️  Checking for new images...');
  
  (async () => {
    try {
      const files = await fs.readdir(IMAGES_DIR);
      let optimizedCount = 0;
      
      for (const file of files) {
        const imagePath = path.join(IMAGES_DIR, file);
        await optimizeImage(imagePath);
        optimizedCount++;
      }
      
      if (optimizedCount === 0) {
        console.log('✨ No new images to optimize!');
      } else {
        console.log(`✨ Optimized ${optimizedCount} new images!`);
      }
    } catch (error) {
      console.error('❌ Error reading images directory:', error.message);
      process.exit(1);
    }
  })();
}

// Handle exit
process.on('SIGINT', () => {
  if (watchMode) {
    console.log('\n👋 Stopping image watcher...');
  }
  process.exit(0);
}); 