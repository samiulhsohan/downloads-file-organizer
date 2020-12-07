import 'dotenv/config';
import chokidar from 'chokidar';
import { forbiddenFiles } from './extensions';
import moveFile from './move';

const watcher = chokidar.watch(process.env.DOWNLOAD_FOLDER, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  depth: 0,
});

watcher.on('add', (path) => {
  forbiddenFiles.forEach((fileType) => {
    if (!path.includes(fileType)) {
      moveFile(path);
    }
  });
});
