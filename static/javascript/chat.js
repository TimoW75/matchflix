const socket = io();
//id's pakken en omzetten in 
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

//Check of er een bericht getypt is als je op submit klikt
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});
//Bericht toevoegen doormiddel van een li aan te maken
socket.on('chat message', function(msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});