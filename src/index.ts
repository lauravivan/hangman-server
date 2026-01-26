import { WebSocketServer } from "ws";
import Messanger from "./helpers/Messanger.ts";
import type { HangmanWebSocket, Users } from "./types.d.ts";
import Connection from "./helpers/Connection.ts";

const server = new WebSocketServer({ port: 8080 });

const users: Users = {};

server.on("connection", function connection(ws: HangmanWebSocket) {
  ws.on("message", function message(message: string) {
    try {
      const msgParsed = JSON.parse(message);
      const messanger = new Messanger();
      const cnn = new Connection(users);

      if ("type" in msgParsed) {
        switch (msgParsed.type) {
          case "login":
            cnn.login(ws, msgParsed.username);
            break;
          case "offer":
            cnn.offer(ws, msgParsed.username, msgParsed.offer);
            break;
          default:
            messanger.error(ws, `Unrecognized command: ${msgParsed.type}`);
            break;
        }
      } else {
        throw new Error("type is missing");
      }
    } catch (e) {
      console.log(e);
    }
  });
});
