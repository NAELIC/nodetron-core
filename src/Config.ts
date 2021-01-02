import { get } from 'env-var'

const Config = {
  logLevel: get('LOGLEVEL').default('info').asEnum([
    'info',
    'fatal',
    'error',
    'warn',
    'debug',
    'trace',
  ]),
  host: {
    address: get('HOST_ADDRESS').required().asString(),
  },
  vision: {
    address: get('VISION_ADDRESS').default('224.5.23.2').asString(),
    port: get('VISION_PORT').default('10006').asIntPositive(),
  },
  gameController: {
    address: get('GAME_CONTROLLER_ADDRESS').default('224.5.23.1').asString(),
    port: get('GAME_CONTROLLER_PORT').default('10003').asIntPositive(),
  },
  yellow: get('YELLOW').required().asBool(),
}

export default Config
