
const socket = io('http://192.168.88.252:5429')


$('#sendButton').click(sendMessage);
function sendMessage() {
  let message = $('#message').val();
  if (message != '') {
    $('#messageBox').append('<p class="d-inline-block bg-primary w-50 rounded">' + message + '</p>')
    $('#message').val('')

    socket.emit('chat',message)
    
  }
}
socket.on('chat',(data)=>{
  $('#messageBox').append('<p class="d-inline-block bg-primary w-50 rounded" style="margin-left:50%">' + data + '</p>')
  $('#message').val('')
})

