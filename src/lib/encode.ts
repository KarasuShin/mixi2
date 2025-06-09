import protobuf from 'protobufjs'
import { proto } from '~/proto'

export function encode<T extends Record<string, any> = Record<string, any>>(data: T, type: string): Promise<Uint8Array> {
  return new Promise<Uint8Array>((resolve, reject) => {
    const root = protobuf.parse(proto).root
    const snakeCaseData = convertToSnakeCase(data)
    const messageType = root.lookupType(`mixi.${type}`)
    const errMsg = messageType.verify(snakeCaseData)
    if (errMsg) {
      reject(new Error(errMsg))
      return
    }

    const message = messageType.create(snakeCaseData)
    const encoded = messageType.encode(message).finish()
    resolve(encoded)
  })
}

function convertToSnakeCase(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(convertToSnakeCase)
  }

  const result: any = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
      result[snakeKey] = convertToSnakeCase(obj[key])
    }
  }

  return result
}
