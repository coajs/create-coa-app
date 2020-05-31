export default (env: Env) => {

  // 加载默认配置
  env.load(`config/0`)

  // 加载环境配置
  env.load(`config/${env.runEnv}`)

  // 加载版本信息
  env.read('version', 'static/version')

}