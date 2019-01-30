const { readFile } = require('./util');

/**
 * recieves an array of paths to audio files on disk
 * returns a promise which resolves with an array of buffers
 */
module.exports.readAudioBuffers = files =>
  Promise.all(files.map(path => readFile(path)));
