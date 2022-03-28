import Router from '@koa/router'
import { newCosmetics } from './new'

const cosmetics = new Router()

cosmetics.use('/new', newCosmetics.routes())
cosmetics.use('/new', newCosmetics.allowedMethods())

export { cosmetics }
