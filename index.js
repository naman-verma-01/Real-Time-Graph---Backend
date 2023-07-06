const mongoose = require('mongoose')
const port = 1800;
const app = require('express')();
const http = require('http');
const {Server} = require('socket.io')
const MONGODB_URI = "mongodb+srv://Naman_Verma:OA3vct6fPNU9SNN5@clustersih2022.kyg4jf6.mongodb.net/?retryWrites=true&w=majority"//'mongodb://localhost/SIH'
const { json } = require('body-parser')
var cors = require('cors');

const dataRoute = require('./route/data')



app.use(json());
app.use(cors())
app.use("/", dataRoute);


const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000'
    },

})



io.on('connection', (socket) => {
    console.log('User Connected ' + socket.id)

    socket.on('send_message', (data) => {
        console.log("RECIVED DATA", data)
        socket.broadcast.emit('recieve_message',data)
    })
})


const start = async () => {

    mongoose.Promise = global.Promise;
    await mongoose.connect(MONGODB_URI);

    server.listen(port, function () {
        console.log(`Listening on port ${port}`);
    });

};

start();