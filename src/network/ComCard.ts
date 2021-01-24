import { Context, ServiceBroker } from 'moleculer'
import SerialPort from 'serialport'
import { OrderMessage } from '@nodetron/types/bots/order'
import { Kick } from '@nodetron/types/enum'

const actionOn: number = (1 << 0)
const actionKick1: number = (1 << 1)
const actionKick2: number = (1 << 2)
const actionDribble: number = (1 << 3)
// ,
// actionCharge : number = (1 << 5),
// actionTareOdom : number =  (1 << 7)

let serial: SerialPort
let tmpPacket: Buffer = Buffer.alloc(14)

export async function start(broker: ServiceBroker): Promise<void> {
  return new Promise((resolve, reject) => {
    serial = new SerialPort('/dev/ttyACM0', {
      baudRate: 1000000,
    })

    serial.on('open', () => {
      broker.logger.info('Serial port opened')
      resolve()
    })

    serial.on('error', () => {
      broker.logger.error('Serial port error')
      reject()
    })

    serial.write('\numb\numb\numb\n') // switch to binary mode
  })
}

export function sendCommand(ctx: Context, payload: OrderMessage): void {
  let action = actionOn

  if (payload.kick === Kick.FLAT) action |= actionKick1
  if (payload.kick === Kick.CHIP) action |= actionKick2
  // if(payload.tareOdometry) action |= actionTareOdom
  if (payload.spin) action |= actionDribble
  // if(payload.charge) action |= charge

  tmpPacket.writeUInt8(0xaa, 0)
  tmpPacket.writeUInt8(0x55, 1)
  tmpPacket.writeUInt8(3, 2)
  tmpPacket.writeUInt8(action, 3)
  tmpPacket.writeInt16BE(payload.velocity.normal, 4)
  tmpPacket.writeInt16BE(payload.velocity.tangent, 6)
  tmpPacket.writeInt16BE(payload.velocity.angular, 8)
  tmpPacket.writeUInt8(0, 10)
  tmpPacket.writeUInt16BE(0, 11)
  tmpPacket.writeUInt8(0xff, 13)
  serial.write(tmpPacket)

  tmpPacket = Buffer.alloc(16)
}
