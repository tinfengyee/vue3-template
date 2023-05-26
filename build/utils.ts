/** 环境变量 */
const wrapperEnv = (envConf: Recordable): ViteEnv => {
  const ret: any = {
    VITE_ENV: '',
    VITE_APP_BASE_API: '',
    VITE_PUBLIC_PATH: '',
    VITE_USE_MOCK: false
  }

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }

    ret[envName] = realName
    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
}
export { wrapperEnv }
