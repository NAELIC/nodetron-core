import { Context, Service, ServiceBroker } from 'moleculer'

export default class SettingService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'control',
    })
  }
}
