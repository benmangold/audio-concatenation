const { readAudioBuffers } = require('./readAudioBuffers');

/**
 * concactenate pcm audio in memory, returning a buffer
 * @param files Array of audio file paths
 */
module.exports.concactenate = async files => {
  const buffers = await readAudioBuffers(files);

  const totalBufferLength = buffers
    .map(buffer => buffer.length)
    .reduce((total, length) => total + length);

  return Buffer.concat(buffers, totalBufferLength);
};
