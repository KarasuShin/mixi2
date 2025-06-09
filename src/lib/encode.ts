import protobuf from 'protobufjs'
import { proto } from '~/proto'

export function encode<T extends Record<string, any> = Record<string, any>>(data: T, type: string): Promise<Uint8Array> {
  return new Promise<Uint8Array>((resolve, reject) => {
    const root = protobuf.parse(proto).root
    const messageType = root.lookupType(`mixi.${type}`)
    const errMsg = messageType.verify(data)
    if (errMsg) {
      reject(new Error(errMsg))
      return
    }

    resolve(messageType.encode(data).finish())
  })
}
