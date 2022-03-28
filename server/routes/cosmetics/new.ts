import Router from '@koa/router'
import { fortniteAPI } from '../../services/fortniteAPI'
const newCosmetics = new Router()

newCosmetics.get('/', async (ctx) => {
  const { data } = (await fortniteAPI.get('v2/cosmetics/br/new')).data
  const { items } = data
  const newCosmetics = items.map((item: { name: any }) => item.name)

  ctx.body = newCosmetics
})

export { newCosmetics }
