import { create } from 'zustand';

const WS_URL = 'ws://localhost:8090';

export const useStore = create((set) => {
  const socket = new WebSocket(WS_URL);

  socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'state') {
      set({ count: data.count, color: data.color });
    }
  });

  const send = (msg) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(msg));
    } else {
      socket.addEventListener('open', () => socket.send(JSON.stringify(msg)), { once: true });
    }
  };

  return {
    count: 0,
    color: 'lightblue',
    increment: () => send({ type: 'increment' }),
    setColor: (color) => send({ type: 'setColor', color }),
  };
});
