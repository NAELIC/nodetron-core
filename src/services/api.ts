/* eslint-disable @typescript-eslint/require-await */
import {
  Service, ServiceActionsSchema, ServiceBroker, ServiceDependency, ServiceEvents,
} from 'moleculer'

import endpoints from '../api/endpoints'
import { manager } from '../api/MessageManager'
import plugins from '../api/plugins'
import Plugin from '../api/plugins/plugin'

let interval: NodeJS.Timeout

interface SchemaPlugin {
  dependencies: Array<string | ServiceDependency>,
  events: ServiceEvents,
  actions: ServiceActionsSchema,
}

export default class APIGateway extends Service {
  private plugins: Array<Plugin> = [];

  public constructor(public broker: ServiceBroker) {
    super(broker)

    this.registerDependencies(broker)

    this.parseServiceSchema({
      name: 'api',
      async started() {
        interval = setInterval(() => {
          manager.send(broker)
        }, 60)
      },
      async stopped() {
        clearInterval(interval)
        manager.release()
      },
      ...this.getSchemaPlugins(),
    })
  }

  public registerDependencies(broker: ServiceBroker): void {
    plugins.forEach((plugin) => this.plugins.push(plugin))
    endpoints.forEach((endpoint) => manager.register(endpoint))
  }

  public getSchemaPlugins(): SchemaPlugin {
    const result: SchemaPlugin = {
      dependencies: [],
      events: {},
      actions: {},
    }

    this.plugins.forEach((plugin) => {
      result.dependencies = [
        ...new Set([
          ...result.dependencies,
          ...plugin.dependencies,
        ]),
      ]
      result.events = { ...result.events, ...plugin.events }
      result.actions = { ...result.actions, ...plugin.actions }
    })

    return result
  }
}
