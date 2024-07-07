export interface Eating {
  name?: string
  price?: number
  monthBuy?: number
  imgUrl?: string
}

export interface Shop {
  id?: string
  name?: string
  Eatings?: Eating[]
  score?: number
}

export interface Order {
  item: Eating
  quantity: number
}
