

 class Sockets{
    constructor( io ){
        this.io = io;
        this.socketsEvents();
    }
    socketsEvents(){

        this.io.on('connection', ( socket) => { 

            socket.on('msg-to-srvr',( data )=>{
                console.log( data );                
                this.io.emit('msg-from-srvr', data);
            });
         });

    }
}
 module.exports = Sockets;