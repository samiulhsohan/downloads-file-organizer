import notifier from 'node-notifier';
import open from 'open';

export default function notify(
  title: string,
  message: string,
  directory?: string
) {
  notifier.notify({
    title,
    message,
    sound: true,
    wait: true,
  });

  notifier.on('click', () => {
    if (directory) {
      open(directory);
    }
  });
}
