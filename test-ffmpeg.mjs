import ffmpegPath from 'ffmpeg-static';
import { execSync } from 'child_process';
execSync(`"${ffmpegPath}" -f concat -safe 0 -i concat_list.txt -c copy test_ffmpeg.mp3`, { stdio: 'inherit' });
