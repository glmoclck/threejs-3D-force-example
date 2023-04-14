import fs from 'fs';
import path from 'path';
import { createObjectCsvWriter } from 'csv-writer';
import { dir } from 'console';

const csvWriter = createObjectCsvWriter({
  path: './src/public/file.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'value', title: 'value' },
  ],
});

const dirPath = './media/themes/Themes d882652ad7a64f94a07dc569f8593506';
const data = [];

function processDir(dirPath, isRecursive = false) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    const id = filePath.replaceAll('/', '.').replaceAll('.md', '');

    // const id = filePath.replace(`${dirPath}/`, '');

    if (stat.isDirectory() && isRecursive) {
      data.push({ id, value: null });
      processDir(filePath);

    } else {
      const value = stat.size;
      data.push({ id, value });
    }
  });
}
// pour faire un graph récursif
processDir(dirPath, true);

csvWriter.writeRecords(data).then(() => {
  console.log('CSV file created successfully.');
});
