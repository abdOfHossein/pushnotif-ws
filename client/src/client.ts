const webSocket = require('ws');

const socket = new webSocket('ws://localhost:8080');

socket.onopen = () => {
  console.log('Connected to server');
  socket.send('Hello from client')
};

socket.onmessage = (event:any) => {
  console.log(`Received message => ${event.data}`);
};

socket.onclose = () => {
  console.log('Disconnected from server');
}