const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const  Sockets  = require("./Sockets");
class Server{
    constructor(){
        this.app= express();
        this.port = process.env.PORT;
        this.server = http.createServer( this.app );
        this.io = socketio( this.server, { /* configuraciones IO */} );
    }
    middlewares()
    {
        this.app.use(express.static(path.resolve(__dirname, "../public")));
    }

    configSockets(){
        new Sockets(this.io);    
    }
    execute(){
        this.middlewares();

        this.configSockets();

        this.server.listen(this.port,()=>{
        console.log("Servidor iniciado en puerto:", this.port);
        });

    }
}

module.exports = Server;