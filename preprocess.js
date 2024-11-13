const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Define the directories to exclude
const excludeDirs = ['node_modules', 'docs/vitepress', 'docs/.vitepress'];

// Create a glob pattern to match all Markdown files, excluding the specified directories
const pattern = '**/*.md';
const options = {
  ignore: excludeDirs.map(dir => `${dir}/**`)
};

async function preprocessFiles() {
  try {
    // Find all matching files
    const files = await fg(pattern, options);

    for (const file of files) {
      const filePath = path.join(__dirname, file);
      console.log(`Processing file: ${filePath}`);

      try {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Replace placeholders with environment variable values
        content = content.replace(/<<DOMAIN_URL>>/g, process.env.DOMAIN_URL);

        // Write the processed content back to the file
        fs.writeFileSync(filePath, content, 'utf-8');

        console.log(`File processed successfully: ${filePath}`);
      } catch (error) {
        console.error(`Error reading or writing file: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Error finding files: ${error.message}`);
  }
}

preprocessFiles();