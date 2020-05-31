import { uuid } from 'coa-mysql'
import { ServeCycle } from 'coa-serve'

export default new class extends ServeCycle {

  async onCreated () {
    await uuid.init()
  }
}
