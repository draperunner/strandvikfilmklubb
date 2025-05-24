import sharp from "sharp";

const filePaths = process.argv.slice(2);

async function main() {
  for (const filePath of filePaths) {
    if (!/\.(jpe?g|png)/.test(filePath)) {
      console.log(`File path ${filePath} is not an image`);
      process.exit(1);
    }

    await sharp(filePath)
      .resize(400)
      .webp()
      .toFile(filePath.replace(/\.\w+$/, ".webp"));
  }
}

main();
