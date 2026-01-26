import type { HangmanWebSocket } from "../types.d.ts";

class Messanger {
  error(ws: HangmanWebSocket, message: string) {
    ws.send(
      JSON.stringify({
        type: "error",
        message,
      }),
    );
  }

  login(ws: HangmanWebSocket, success: boolean) {
    ws.send(
      JSON.stringify({
        type: "login",
        message: `${success}`,
      }),
    );
  }

  offer(ws: HangmanWebSocket, offer: string, username: string) {
    ws.send(
      JSON.stringify({
        type: "offer",
        offer,
        username,
      }),
    );
  }
}

export default Messanger;
