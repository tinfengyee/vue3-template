/**
 *  Introduces component library styles on demand.
 * https://github.com/antfu/unplugin-vue-components
 */
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import type { ComponentResolver } from 'unplugin-vue-components/types'

function generImportResolver(isBuild: boolean) {
  const importResolvers: any[] = [
    // 自动导入图标组件
    IconsResolver({
      prefix: 'Icon'
    })
  ]
  // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
  isBuild && importResolvers.push(ElementPlusResolver())
  return importResolvers
}

function generateCompResolver(isBuild: boolean) {
  const compResolver: (ComponentResolver | ComponentResolver[])[] = [
    // 自动注册图标组件
    IconsResolver({
      enabledCollections: ['ep']
    })
  ]
  // 自动导入 Element Plus 组件
  isBuild && compResolver.push(ElementPlusResolver())
  return compResolver
}

export function configUnplugin(isBuild: boolean) {
  const unplugins = [
    AutoImport({
      // imports: ['vue', 'vue-router'],
      resolvers: generImportResolver(isBuild),
      vueTemplate: true,
      dts: 'types/auto-imports.d.ts'
      // eslintrc: {
      //   enabled: true, // Default `false`
      //   filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      //   globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      // }
    }),
    Components({
      // 生产环境按需导入
      // resolvers: command === 'build' ? ElementPlusResolver() : undefined,
      resolvers: generateCompResolver(isBuild),

      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'types/components.d.ts'
    }),
    Icons({
      autoInstall: true
    })
  ]
  return unplugins
}
