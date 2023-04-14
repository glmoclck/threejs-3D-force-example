import * as fs from 'fs';
import * as path from 'path';

// Used foor looking at posts folder and make a json file
// works with tree graphs

interface FileInfo {
  name: string;
  path: string;
  size: number;
  isDirectory: boolean;
  children: FileInfo[];
}

async function fileTreeToJson(
  rootDir: string,
  outputFilePath: string
): Promise<void> {
  const rootDirPath = path.resolve(process.cwd(), rootDir);
  const rootInfo = await getFileInfo(rootDirPath);
  const json = JSON.stringify(rootInfo, null, 2);
  await fs.promises.writeFile(outputFilePath, json);
}

async function getFileInfo(filePath: string): Promise<FileInfo> {
  const stats = await fs.promises.stat(filePath);
  const fileInfo: FileInfo = {
    name: path.basename(filePath),
    path: filePath,
    size: stats.size,
    isDirectory: stats.isDirectory(),
    children: [],
  };
  if (stats.isDirectory()) {
    const entries = await fs.promises.readdir(filePath, {
      withFileTypes: true,
    });
    for (const entry of entries) {
      const entryPath = path.join(filePath, entry.name);
      const childInfo = await getFileInfo(entryPath);
      fileInfo.children.push(childInfo);
    }
  }
  return fileInfo;
}

fileTreeToJson('./src/media/posts', './src/public/test.json');
