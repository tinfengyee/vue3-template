import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import { configMockPlugin } from './mock'
import { configUnplugin } from './unplugin'
import { fullImportPlugin } from './elplusFullImport'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    // svg-loader
    svgLoader({
      svgoConfig: {
        multipass: true
      }
    })
    // vite-plugin-svg-icons 暂时不加入
  ]
  // unplugin
  vitePlugins.push(configUnplugin(isBuild))
  // fullImportPlugin
  !isBuild && vitePlugins.push(fullImportPlugin())
  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(VITE_USE_MOCK))

  return vitePlugins
}
