const ttf2woff2 = require('ttf2woff2');
const fs = require('fs');
const path = require('path');

// Define paths
const publicDir = path.join(__dirname, '../public');
const fontsDir = path.join(publicDir, 'fonts');
const inputFile = 'Perfect DOS VGA 437 Win.ttf';
const outputFile = 'Perfect DOS VGA 437.woff2';

const fontPath = path.join(publicDir, inputFile);
const outputPath = path.join(fontsDir, outputFile);

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
    console.log(`Creating fonts directory: ${fontsDir}`);
    fs.mkdirSync(fontsDir, { recursive: true });
}

// Check if input file exists
if (!fs.existsSync(fontPath)) {
    console.error(`Input font file not found: ${fontPath}`);
    process.exit(1);
}

try {
    // Read the TTF file
    console.log(`Reading font file: ${fontPath}`);
    const input = fs.readFileSync(fontPath);

    // Convert to WOFF2
    console.log('Converting to WOFF2...');
    const output = ttf2woff2(input);

    // Write the WOFF2 file
    console.log(`Writing output to: ${outputPath}`);
    fs.writeFileSync(outputPath, output);

    console.log('Conversion complete!');
} catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
}
