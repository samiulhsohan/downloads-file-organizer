import {
  audios,
  compressedFiles,
  designFiles,
  documents,
  installables,
  photos,
  videos,
} from './extensions';
import { extname, join, basename } from 'path';
import { renameSync } from 'fs';
import notify from './notify';

export default function moveFile(filePath: string) {
  const fileName = basename(filePath);
  const extension = extname(fileName);

  if (extension) {
    const newPath = join(process.env.OTHERS_LOCATION, fileName);

    if (documents.includes(extension)) {
      const newPath = join(process.env.DOCUMENTS_LOCATION, fileName);
      renameSync(filePath, newPath);
      notify('Moved', fileName, process.env.DOCUMENTS_LOCATION);
      return;
    }

    if (videos.includes(extension)) {
      const newPath = join(process.env.VIDEOS_LOCATION, fileName);
      renameSync(filePath, newPath);
      notify('Moved', fileName, process.env.VIDEOS_LOCATION);
      return;
    }

    if (photos.includes(extension)) {
      const newPath = join(process.env.PHOTOS_LOCATION, fileName);
      renameSync(filePath, newPath);
      notify('Moved', fileName, process.env.PHOTOS_LOCATION);
      return;
    }

    if (audios.includes(extension)) {
      const newPath = join(process.env.AUDIOS_LOCATION, fileName);
      renameSync(filePath, newPath);
      notify('Moved', fileName, process.env.AUDIOS_LOCATION);
      return;
    }

    if (installables.includes(extension)) {
      const newPath = join(process.env.INSTALLABLES_LOCATION, fileName);
      renameSync(filePath, newPath);
      notify('Moved', fileName, process.env.INSTALLABLES_LOCATION);
      return;
    }

    if (compressedFiles.includes(extension)) {
      const newPath = join(process.env.ARCHIVES_LOCATION, fileName);
      renameSync(filePath, newPath);
      notify('Moved', fileName, process.env.ARCHIVES_LOCATION);
      return;
    }

    if (designFiles.includes(extension)) {
      const newPath = join(process.env.DESIGNS_LOCATION, fileName);
      renameSync(filePath, newPath);
      notify('Moved', fileName, process.env.DESIGNS_LOCATION);
      return;
    }

    renameSync(filePath, newPath);
    notify('Moved to Others', fileName, process.env.OTHERS_LOCATION);
  }
}
