# mixi2
[![npm package](https://img.shields.io/npm/v/mixi2.svg)](https://www.npmjs.com/package/mixi2)

[mixi2](https://mixi.social/) client for Node.js and browsers

## Installation

```bash
npm install mixi2
```

## Quick Start

### Node.js

```typescript
import { MixiClient } from 'mixi2'

const client = new MixiClient(
  'your-cookie-string',
  'your-auth-key'
)

const feeds = await client.getSubscribingFeeds({ limit: 50 })
```

### Browser

Due to browser security restrictions, cookies cannot be sent directly in cross-origin requests. To work around this:

1. **Set up a proxy server**: Use nginx or other proxy servers to forward requests to the official API
2. **Send cookies via custom headers**: MixiClient will send the cookie value to the proxy server via the `x-proxy-cookie` header

```typescript
import { MixiClient } from 'mixi2'

const client = new MixiClient(
  'your-cookie-string',
  'your-auth-key',
  {
    baseUrl: 'https://your-proxy-server.com'
  }
)

const feeds = await client.getSubscribingFeeds({ limit: 50 })
```

#### Nginx Proxy Configuration Example

```nginx
server {
    listen 80;
    server_name your-proxy-server.com;

    location / {
        proxy_pass https://mixi.social/api/connect/com.mixi.mercury.api.MercuryService/;

        proxy_ssl_verify off;
        proxy_ssl_server_name on;

        proxy_set_header Cookie $http_x_proxy_cookie;

        proxy_set_header x-proxy-cookie "";
    }
}
```

## Custom HTTP Adapter

You can provide a custom HTTP adapter to override the default fetch behavior. This is useful when you need to customize request handling, add middleware, or integrate with different HTTP clients.

```typescript
import { MixiClient } from 'mixi2'

// Example: Using a custom adapter with additional logging
const httpAdapter = async (url: string, init?: RequestInit) => {
  console.log(`Making request to: ${url}`)
  const response = await fetch(url, init)
  console.log(`Response status: ${response.status}`)
  return response
}

const client = new MixiClient(
  'your-cookie-string',
  'your-auth-key',
  {
    httpAdapter
  }
)
```

## License

MIT
