var SpeechRecognition = webkitSpeechRecognition
var SpeechRecognitionEvent = webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
recognition.lang = 'it-IT';
recognition.interimResults = true;
recognition.continuous = true;
recognition.maxAlternatives = 1;

var diagnostic = $('.output');
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



recognition.onspeechend = function() {
  //recognition.stop();
  console.log("FOLDSAD")
}

var oldWord="pippo";
recognition.onresult = function(event) {
  var lastIndex = event.results.length
  var word = event.results[lastIndex-1][0].transcript
  var confidence = event.results[lastIndex-1][0].confidence;
  diagnostic.prepend("<li>"+word+"<pre>"+confidence+"</pre>");
//  recognition.start();

}


recognition.onnomatch = function(event) {
  diagnostic.textContent = 'I didnt recognise that color.';
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

recognition.onend = function() {
  console.log('Speech recognition service disconnected');
  recognition.start();
}

