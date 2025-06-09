import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src'],
  platform: 'neutral',
  unbundle: true,
  format: 'esm',
})
