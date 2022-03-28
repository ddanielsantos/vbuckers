export type RawItem = {
  id: string,
  name: string,
  description: string,
  type: {
    value: string,
    displayValue: string,
    backendValue: string
  },
  rarity: {
    value: string,
    displayValue: string,
    backendValue: string
  },
  series: null,
  set: {
    value: string,
    text: string,
    backendValue: string
  },
  introduction: {
    chapter: number,
    season: number,
    text: string,
    backendValue: number
  },
  images: {
    smallIcon: string,
    icon: string,
    featured: string,
    other: null
  },
  variants: null,
  searchTags: null,
  gameplayTags: string[],
  metaTags: null,
  showcaseVideo: string,
  dynamicPakId: null,
  displayAssetPath: string,
  definitionPath: string,
  path: string,
  added: string,
  shopHistory: string[]
}

export type TreatedItem = Pick<RawItem,
  'id'
  | 'name'
  | 'type'
  | 'set'
  | 'images'
  | 'added'
>

type Entry = {
  items: RawItem
}

type ShopKind = 'featured' | 'specialFeatured' | 'daily' | 'specialDaily'

export type MappedShop = {
  // eslint-disable-next-line no-unused-vars
  [key in ShopKind]: { entries: Entry[] } | null
}

export type ShopResponse = {
  data: MappedShop
}
