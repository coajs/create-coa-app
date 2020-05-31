export default {
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    user: 'xxx',
    password: 'xxx',
    database: 'xxx',
    charset: 'utf8mb4',
    trace: true,
    debug: false
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    db: 1,
    prefix: 'xxx',
    trace: false
  },
  // 文档
  docs: {
    path: '/doc',
    filter: true,
    expansion: 'list', // 可选full,list,none
    info: {
      title: 'xxx接口文档',
      description: 'xxx接口文档'
    }
  }
}
