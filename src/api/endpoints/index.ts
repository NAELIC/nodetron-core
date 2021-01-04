import Config from '../../Config'

import Websocket from './websocket'

export default [new Websocket(Config.network.ws.port)]
