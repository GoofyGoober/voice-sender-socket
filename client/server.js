var connection;
connection = new WebSocket("ws://"+$('#ip').val())
setupConnection();


function changeIp(e){
  connection = new WebSocket("ws://"+$('#ip').val())
  setupConnection();
}

function setupConnection(){
  // Log messages from the server
  connection.onmessage = function (e) {
    console.log('Server: ' + e.data);
    $('#status-server').html('Server: '+e.data)
  };
  connection.onerror = function (e) {
    console.log('Server: ' + e.data);
    $('#status-server').html('Server: '+e.data)
  };
  connection.onopen = function(e) {
    console.log("Connection established!");
    $('#status-server').html('Connessione col server stabilita - VERBOSO')
    connection.send('Hello Me!');
  };
}