const { WebSocketServer } = require('ws');

const PORT = 8090;
const wss = new WebSocketServer({ port: PORT });

const state = { count: 0, color: 'lightblue' };

const broadcast = () => {
  const payload = JSON.stringify({ type: 'state', ...state });
  for (const client of wss.clients) {
    if (client.readyState === client.OPEN) client.send(payload);
  }
};

wss.on('connection', (socket) => {
  socket.send(JSON.stringify({ type: 'state', ...state }));

  socket.on('message', (raw) => {
    const msg = JSON.parse(raw);
    if (msg.type === 'increment') state.count += 1;
    if (msg.type === 'setColor') state.color = msg.color;
    broadcast();
  });
});

console.log(`WS relay listening on ws://localhost:${PORT}`);
