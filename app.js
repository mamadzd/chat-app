const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors : { origin:"*" }});

app.use(express.static(path.join(__dirname, 'views')))


app.get('/', (req, res)=>{
  // res.sendFile('chatRoom.html')
  res.sendFile(path.join(__dirname, 'views', 'chatRoom.html'))

})

//run when client  connetct
io.on('connection',(socket)=>{
  console.log('New Ws Connetion...')
  socket.on('chat',(data) =>{
    socket.broadcast.emit('chat', data);
  })
})

const PORT = 5429 || process.env.PORT

// app.listen(PORT, ()=>{
//   console.log(`server is running on PORT ${PORT}`)
// })

server.listen(PORT, ()=>console.log(`server is on PORT ${PORT}`))