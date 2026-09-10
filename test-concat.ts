import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
// @ts-ignore
ffmpeg.setFfmpegPath(ffmpegStatic);

ffmpeg()
  .input('concat_list.txt')
  .inputOptions(['-f', 'concat', '-safe', '0'])
  .outputOptions(['-c copy'])
  .save('test_concat.mp3')
  .on('end', () => console.log('OK'))
  .on('error', (err) => console.error(err));
