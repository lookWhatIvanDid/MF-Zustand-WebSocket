# MF-Zustand-WebSocket

Webpack Module Federation demo where two independently-deployed micro-frontends share one Zustand store, synced in real time over a WebSocket relay.

## Structure

- `container` (:8000) — host app, loads remotes
- `app1` (:8001) — exposes `CounterButton`, controls the shared counter
- `app2` (:8002) — exposes `ColorButton`, controls the shared color
- `shared` (:8003) — exposes the Zustand `store`
- `relay` — WebSocket server (:8090) that holds and broadcasts shared state

## Run

Start `relay`, `shared`, `app1`, `app2`, then `container` (each with `npm start` in its folder).
