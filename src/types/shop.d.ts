export interface IShop {
  activitys: IActivity[]
  branch: string
  comments: string[]
  deliveryDistance: string
  deliveryStrategy: string
  deliveryStratingPrice: string
  deliveryTags: string[]
  deliveryTime: string
  id: string
  monthlyCount: number
  postUrl: string
  bgUrl: string
  score: number
  services: IService[]
  shopName: string
  tops: string[]
}

export interface IService {
  type: number
  label: string
}

export interface IActivity {
  type: number
  tips?: string
  infos?: string[]
}

export interface IShopDetail extends IShop {
  announcement: string
  discounts: IDiscount[]
  redbags: IRedbag[]
}

export interface IDiscount {
  type: number
  label: string
  content: IDiscountContent[]
}

export interface IRedbag {
  type: number
  count: number
  if: string
}

export interface IDiscountContent {
  count: number
  if: number
  limit: number
  label: string
}
