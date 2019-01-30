# audio concatenate

this repo demonstrates concatenating pcm audio in node.js with no dependencies

pcm files contain audio as unformatted bytes, unlike wav signed pcm, etc

audio of any lossy codec can be converted to pcm without necessarily degrading the signal. reducing sample rate and bit depth from the orignal file will degrade the signal

this allows us to manipulate the audio files as Buffers in memory, and save a new pcm audio file to disk using a Buffer

pcm audio saved to disk can then be encoded to a friendlier format :)

# setup

Install Node and npm, see `SETUP.md`

[Install ffmpeg](https://www.ffmpeg.org/download.html)

# running the app

concatenate `pcm/one.pcm` and `pcm/two.pcm` into `pcm/oneTwo.pcm`
```bash
node index.js # will write pcm/oneTwo.pcm 
```

# encoding pcm with ffmpeg

enocde a wav file `wav/one.wav` to 16bit 44.1kHz mono pcm `pcm/one.pcm` 
```bash
ffmpeg -i wav/one.wav -acodec pcm_s16le -f s16le -ac 1 -ar 44100 pcm/one.pcm
```

# encoding pcm to wav with ffmpeg
```bash
ffmpeg -i pcm/oneTwo.pcm -f s16le -ar 44100 -ac 1 wav/oneTwo.wav
```

# listening to pcm with Audacity

File > Import > Raw Data...
Select pcm file in dialog, click `Open`
Leave default settings in format dialog, click `Import`