import protobuf from 'protobufjs'
import { proto } from '~/proto'

export function decode<T = any>(data: Uint8Array, type: string) {
  return new Promise<T>((resolve) => {
    const root = protobuf.parse(proto).root

    const messageType = root.lookupType(`mixi.${type}`).decode(data)
    resolve(root.lookupType(`mixi.${type}`).toObject(messageType) as T)
  })
}
