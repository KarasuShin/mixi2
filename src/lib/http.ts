import { isBrowser } from '~/lib/is'

const BASE_URL = 'https://mixi.social/api/connect/com.mixi.mercury.api.MercuryService'

export class Http {
  private cookie: string
  private authKey: string
  private baseUrl: string

  constructor(
    cookie: string,
    authKey: string,
    options?: {
      baseUrl?: string
    },
  ) {
    this.cookie = cookie
    this.authKey = authKey
    this.baseUrl = options?.baseUrl || BASE_URL
  }

  async request(path: string, body?: Uint8Array) {
    const headers: Record<string, string> = {
      'x-auth-key': this.authKey,
      'x-mercury-user-agent': 'Mercury-web/3.2.0',
      'content-type': 'application/proto',
    }

    if (isBrowser()) {
      if (this.cookie) {
        headers['x-proxy-cookie'] = this.cookie
      }
    }
    else {
      headers.cookie = this.cookie
    }

    const requestOptions: RequestInit = {
      method: 'POST',
      headers,
      body,
    }

    const response = await fetch(`${this.baseUrl}${path}`, requestOptions)

    if (response.status >= 400) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    return response
  }
}
