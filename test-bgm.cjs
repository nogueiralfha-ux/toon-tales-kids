const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegStatic);

const bgmPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789051021383.mp3';

// we need a dummy voice track. Let's make a 5 sec silent track.
// Actually just test the ffmpeg command syntax
const { execSync } = require('child_process');
execSync(`"${ffmpegStatic}" -f lavfi -i anullsrc=r=44100:cl=stereo -t 5 dummy_voice.mp3`);

ffmpeg()
  .input('dummy_voice.mp3')
  .input(bgmPath)
  .inputOptions(['-stream_loop', '-1'])
  .complexFilter([
    '[1:a]volume=0.15[bg]',
    '[0:a][bg]amix=inputs=2:duration=first:dropout_transition=2[a]'
  ])
  .outputOptions([
    '-map', '[a]',
    '-c:a', 'libmp3lame',
    '-q:a', '2'
  ])
  .save('test_mix.mp3')
  .on('end', () => console.log('OK MIX'))
  .on('error', console.error);
