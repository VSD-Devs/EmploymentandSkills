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

// Add these images to be optimized:
// /raw-images/t-levels-hero.jpg - A hero image showing students in a technical learning environment
// /raw-images/t-levels-overview.jpg - An image showing students working with technical equipment
// /raw-images/providers/barnsley-college.jpg - Barnsley College campus
// /raw-images/providers/sheffield-college.jpg - Sheffield College campus
// /raw-images/providers/longley-park.jpg - Longley Park campus
// /raw-images/providers/rnn-group.jpg - RNN Group campus
// /raw-images/providers/trc.jpg - Thomas Rotherham College campus
// /raw-images/providers/utc-sheffield.jpg - UTC Sheffield campus

const inputDir = path.join(__dirname, '../raw-images');
const outputDir = path.join(__dirname, '../public/images');

// Create output directories if they don't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

if (!fs.existsSync(path.join(outputDir, 'providers'))) {
  fs.mkdirSync(path.join(outputDir, 'providers'));
}

// Process each image
async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toFile(outputPath);
    console.log(`Processed: ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

// Process all images in the raw-images directory
async function processAllImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    if (fs.statSync(inputPath).isDirectory()) {
      // Handle subdirectories (like providers)
      const subFiles = fs.readdirSync(inputPath);
      for (const subFile of subFiles) {
        const subInputPath = path.join(inputPath, subFile);
        const subOutputPath = path.join(outputDir, file, subFile);
        await processImage(subInputPath, subOutputPath);
      }
    } else {
      await processImage(inputPath, outputPath);
    }
  }
}

processAllImages().catch(console.error); 