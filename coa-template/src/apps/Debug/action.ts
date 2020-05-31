import { env } from 'coa-env'

export default <Action>{

  'debug.config': {
    options: {
      method: 'GET',
      name: '【调试】- 获取配置信息',
      param: {}
    },
    async default (ctx) {
      const header = ctx.header
      ctx.jsonOk({ header, env })
    }
  }
}
