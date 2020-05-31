import { serve } from 'coa-serve'
import apps from './apps'
import context from './context'
import cycle from './cycle'

serve({ apps, context }, cycle).then()
