import { WebSocket } from "ws";

export interface HangmanWebSocket extends WebSocket {
  username: string;
  otherUsername: string;
}

export interface Users {
  [username: string]: HangmanWebSocket;
}
