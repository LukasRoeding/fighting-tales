const http = require('http');
const socketIO = require('socket.io');

// Create a basic HTTP server
const server = http.createServer();
const io = socketIO(server);

// Event handler for new socket connections
io.on('connection', (socket) => {
  console.log('A new user connected');

  // Event handler for 'message' event
  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data); // Broadcast the message to all connected clients
  });

  // Event handler for 'disconnect' event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3000; // You can change the port if needed
server.listen(port, () => {
  console.log(`Socket.IO server running on port ${port}`);
});