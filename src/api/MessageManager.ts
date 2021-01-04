import { ServiceBroker } from 'moleculer'

import Endpoint from './endpoints/endpoint'

export interface Message {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any,
}

class MessageManager {
  private endpoints : Array<Endpoint> = [];

  private message : Message = {};

  public register(endpoint: Endpoint) : void {
    this.endpoints.push(endpoint)
  }

  public addMessage(msg : Message, broker: ServiceBroker): void {
    broker.logger.debug('Add message in messages queue')
    this.message = { ...this.message, ...msg }
  }

  public send(broker: ServiceBroker) : void {
    broker.logger.debug('Send messages')
    this.endpoints.forEach((ep) => {
      ep.send(JSON.stringify(this.message))
    })
    this.message = {}
  }

  public release() : void {
    this.endpoints.forEach((ep) => {
      ep.release()
    })
  }
}

export const manager = new MessageManager()
