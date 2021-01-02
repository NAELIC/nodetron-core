import { Service, ServiceBroker } from 'moleculer'

export default class SettingService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker)
    this.parseServiceSchema({
      name: 'settings',
      created() {
        void broker.emit('settings.update', {
          test: 'hello world',
        })
      },
      actions: {
        get() {
          return {
            hello: 'hello world',
          }
        },
      },
    })
  }
}
