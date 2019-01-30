const {concactenate} = require('./app/concatenatePcmAudio')
const {writeFile} = require('./app/util')


concactenate(['pcm/one.pcm', 'pcm/two.pcm']).then((res) => {
  writeFile('pcm/oneTwo.pcm',res).then(() => console.log('written'))
})