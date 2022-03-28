import Router from '@koa/router'
import { shopController } from '../../controllers/shopController'
const shopRoute = new Router()

shopRoute.get('/featured', async (ctx) => {
  ctx.body = shopController(ctx, 'featured')

  return ctx.body
})

shopRoute.get('/special-featured', async (ctx) => {
  ctx.body = shopController(ctx, 'specialFeatured')

  return ctx.body
})

shopRoute.get('/daily', async (ctx) => {
  ctx.body = shopController(ctx, 'daily')

  return ctx.body
})

shopRoute.get('/special-daily', async (ctx) => {
  ctx.body = shopController(ctx, 'specialDaily')

  return ctx.body
})

export { shopRoute }
