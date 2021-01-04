import { Server } from 'ws'

import Endpoint from './endpoint'

export default class Websocket implements Endpoint {
    private server: Server;

    constructor(port : number) {
      this.server = new Server({
        port,
      })
    }

    public send(json: string): void {
      this.server.clients.forEach((client) => {
        client.send(json)
      })
    }

    public release(): void {
      this.server.close()
    }
}
