import Router from '@koa/router'
import { cosmetics } from './cosmetics'
import { shopRoute } from './shop'

const routes = new Router()

routes.use('/cosmetics', cosmetics.routes())
routes.use('/cosmetics', cosmetics.allowedMethods())
routes.use('/shop', shopRoute.routes())
routes.use('/shop', shopRoute.allowedMethods())

export { routes }
