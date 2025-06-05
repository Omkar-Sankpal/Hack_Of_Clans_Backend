import { Server } from 'socket.io';
import http from 'http';
import express from "express";

const app = express();

const server = http.createServer(app);

const allowedOrigins = [
  "http://localhost:5173",
  "https://hack-of-clans-frontend.onrender.com"
];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  }
});

io.on("connection", (socket) => {
  console.log("A user connected ", socket.id);

  socket.on("join-room", (teamId) => {
    socket.join(teamId);
    console.log(`User ${socket.id} joined room ${teamId}`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected ", socket.id);
  });
});

export { io, app, server };
