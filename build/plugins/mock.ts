/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 *
 * 3.0 版本 ReferenceError: require is not defined, details see https://github.com/vbenjs/vite-plugin-mock/issues/97
 */
import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(enable: boolean) {
  return viteMockServe({
    // default
    mockPath: 'mock',
    localEnabled: enable
  })
}
