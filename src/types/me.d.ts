export interface IMeInfo {
  cards: ICard[]
  superCard: ISuperCard
}

// 吃货卡
export interface ICard {
  label: string
  size: number
  items: IItem[]
}

export interface IItem {
  count: number
  iconUrl: string
  label: string
}

// 超级卡
export interface ISuperCard {
  // 吃货豆
  beanCount: number
  tips: string
}
