var connection;
connection = new WebSocket("ws://"+getIpFromInput())
// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
connection.onerror = function (e) {
  console.log('Server: ' + e.data);
};
connection.onopen = function(e) {
    console.log("Connection established!");
    connection.send('Hello Me!');
};



function getIpFromInput(){
  return document.getElementById('ip').value
}


function changeIp(e){
  connection = new WebSocket("ws://"+getIpFromInput())
}