import getUserMedia from 'get-user-media-promise'
import MicrophoneStream from 'microphone-stream'
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var all = []
document.getElementById('my-start-button').onclick = function () {
  // Note: in most browsers, this constructor must be called in response to a click/tap, 
  // or else the AudioContext will remain suspended and will not provide any audio data.
  // Stop when ready
  var micStream = new MicrophoneStream();

  micStream.on('format', function (format) {
    console.log('whyyy')
    console.log(format);
  });

  getUserMedia({ video: false, audio: true })
    .then(function (stream) {
      micStream.setStream(stream);
    }).catch(function (error) {
      console.log(error);
    });

  // get Buffers (Essentially a Uint8Array DataView of the same Float32 values)
  micStream.on('data', function (chunk) {
    // Optionally convert the Buffer back into a Float32Array
    // (This actually just creates a new DataView - the underlying audio data is not copied or modified.)
    const raw = MicrophoneStream.toRaw(chunk)
    all = Float32Concat(all, raw);
    console.log(all)
  });
}

document.getElementById('my-stop-button').onclick = function () {
  micStream.stop();
  playAudio()
};


// https://stackoverflow.com/questions/4554252/typed-arrays-in-gecko-2-float32array-concatenation-and-expansion
function playAudio() {
  var myArrayBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * all.length, audioCtx.sampleRate);
  var nowBuffering = myArrayBuffer.getChannelData(0)

  for (var i = 0; i < myArrayBuffer.length; i++) {
    nowBuffering[i] = all[i]
  }
  var source = audioCtx.createBufferSource();
  source.buffer = myArrayBuffer
  source.connect(audioCtx.destination)
  source.start()
}

function Float32Concat(first, second) {
  var firstLength = first.length,
    result = new Float32Array(firstLength + second.length);

  result.set(first);
  result.set(second, firstLength);

  return result;
}
