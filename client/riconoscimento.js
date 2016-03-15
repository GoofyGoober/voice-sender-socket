var SpeechRecognition = webkitSpeechRecognition
var SpeechRecognitionEvent = webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
recognition.lang = 'it-IT';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var start = document.querySelector('#start');
var btnInterim = document.querySelector('#interim')

start.onclick = function() { recognition.start(); }

recognition.onstart = function(event){ console.log("on start") }

btnInterim.addEventListener('change',function(){ 
  if (recognition.interimResults == true){
    recognition.interimResults = false
  } else {
    recognition.interimResults = true;
  }
});

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  //recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = 'I didnt recognise that color.';
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}