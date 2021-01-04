import { ServiceActionsSchema, ServiceDependency, ServiceEvents } from 'moleculer'

export default interface Plugin {
    dependencies: Array<string | ServiceDependency>,
    events: ServiceEvents,
    actions: ServiceActionsSchema,
}
