import { writeFile, readFile, copyFile } from 'fs/promises';
import path from 'path';
import toIco from 'to-ico';
import { createCanvas, loadImage } from 'canvas';

const sourceIconDir = __dirname;
const rootDir = path.join(__dirname, '../../..');

const coreAssetDir = path.join(rootDir, 'core/src/assets/images');
const coreAppDir = path.join(rootDir, 'core/src/app');
const coreIconSizes = [32, 192, 384];
const faviconSize = 32;

async function IconGenerator() {
  const sourceIconData = await readFile(sourceIconDir + '/icon.png');
  let generatedJobs: Promise<void>[] = [];
  // Generate icons
  for (const size of coreIconSizes) {
    generatedJobs.push(
      resizeImageToFile(
        sourceIconData,
        `${coreAppDir}/icon${size}.png`,
        size,
        size,
      ),
    );
  }
  generatedJobs.push(
    resizeImageToFile(sourceIconData, `${coreAppDir}/apple-icon.png`, 180, 180),
  );
  // Generate Favicons
  generatedJobs.push(
    generateIcoToFile(sourceIconData, `${coreAppDir}/favicon.ico`, faviconSize),
  );
  // Move logo to asset directory
  generatedJobs.push(
    copyFile(sourceIconDir + '/logo.png', `${coreAssetDir}/logo.png`),
  );
  await Promise.all(generatedJobs);
  console.log(`icon-generator: Icons generated.`);
}

async function resizeImageToFile(
  sourceData: Buffer,
  destination: string,
  targetWidth: number,
  targetHeight: number,
) {
  const canvas = createCanvas(targetWidth, targetHeight);
  const ctx = canvas.getContext('2d');

  const sourceImage = await loadImage(sourceData);
  // params: image, position.x, position.y, size.width, size.height
  ctx.drawImage(sourceImage, 0, 0, targetWidth, targetHeight);
  let resizedData: Buffer;
  if (
    path.extname(destination) === '.jpg' ||
    path.extname(destination) === '.jpeg'
  ) {
    resizedData = canvas.toBuffer('image/jpeg');
  } else {
    resizedData = canvas.toBuffer('image/png');
  }

  // Save resized image to a file
  await writeFile(destination, resizedData);
}

async function generateIcoToFile(
  sourceData: Buffer,
  destination: string,
  faviconSize: number,
) {
  const icoData = await toIco(sourceData, {
    resize: true,
    sizes: [faviconSize],
  });

  // Save favicon to a file
  await writeFile(destination, icoData);
}

// Self-invocation async function
(async () => {
  await IconGenerator();
})().catch((err) => {
  console.error(err);
  throw err;
});
