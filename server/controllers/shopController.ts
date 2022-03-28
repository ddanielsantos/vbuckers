import { Context } from 'koa'
import { fortniteAPI } from '../services/fortniteAPI'
import type { MappedShop, RawItem, ShopResponse, TreatedItem } from 'routes/shop/type'

const shopPath = 'v2/shop/br'

function extractItems({ id, name, type, set, images, added }: RawItem): TreatedItem {
  return (
    { id, name, type, set, images, added }
  )
}

export async function shopController(ctx: Context, subPath: keyof MappedShop) {
  const { data }: ShopResponse = (await fortniteAPI.get(shopPath)).data
  const dataBySpecifiedShopKind = data[subPath]

  if (!dataBySpecifiedShopKind) {
    ctx.body = {}
    return ctx.body
  }

  const entries = dataBySpecifiedShopKind.entries
  const itemsArr = entries.map(entry => entry.items).flat(1)
  const items = itemsArr.map(extractItems)

  ctx.body = items
  return ctx.body
}
