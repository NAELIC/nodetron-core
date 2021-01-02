import { Context, Service, ServiceBroker } from 'moleculer'

export default class SettingService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'order',
      dependencies: ['settings'],
      async started() {
        broker.logger.warn(await broker.call('settings.get'))
      },
      events: {
        'settings.update': function (ctx: Context<{ hello: string }>) {
          broker.logger.warn(ctx)
        },
      },
    })
  }
}
