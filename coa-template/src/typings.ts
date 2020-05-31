import * as CoaEnv from 'coa-env'
import * as CoaMysql from 'coa-mysql'
import * as CoaServe from 'coa-serve'
import app_config from 'config/0'
import app_context from 'context'

declare type AppConfig = typeof app_config
declare type AppContext = typeof app_context

declare module 'coa-env' {
  interface Env extends AppConfig {}
}

declare module 'coa-serve' {
  interface Context extends AppContext {}
}

declare global {
  type Env = CoaEnv.Env
  type Action = CoaServe.Action
  type DataSet = CoaServe.Dic<any>
  type Dic<T> = CoaServe.Dic<T>
  type Context = CoaServe.Context
  type Page = CoaMysql.Page
  type Query = CoaMysql.Query
  type Transaction = CoaMysql.Transaction
  type QueryBuilder = CoaMysql.QueryBuilder
}
