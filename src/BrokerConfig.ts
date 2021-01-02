/* eslint-disable no-shadow */
import { BrokerOptions } from 'moleculer'

import Config from './Config'

const BrokerConfig: BrokerOptions = {
  transporter: 'TCP',
  serializer: 'JSON',

  logger: {
    type: 'Console',
    options: {
      level: Config.logLevel,
      colors: true,
      moduleColors: true,
      formatter: 'full',
      autoPadding: true,
    },
  },
}

export default BrokerConfig
