const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*', // You can specify specific origins instead of '*' for better security
        methods: ['GET', 'POST']
    }
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/lives/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'caller.html'));
});

app.get('/view/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'callee.html'));
});

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('start-lives', ({ role, roomId }) => {
        socket.data = { role, roomId };
        socket.join(roomId);
        console.log("Owner connected");
    });

    socket.on('join', (data) => {
        socket.join(data.roomId);
        socket.to(data.roomId).emit('join', socket.id);
        console.log(`Client ${socket.id} joined room ${data.roomId}`);
    });

    socket.on('offer', (data) => {
        socket.to(data.roomId).emit('offer', data.sdp);
    });

    socket.on('answer', (data) => {
        console.log("transfer:answer");
        socket.to(data.roomId).emit('answer', data.sdp);
    });

    socket.on('candidate', (data) => {
        socket.to(data.roomId).emit('candidate', data.candidate);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.data);
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});
