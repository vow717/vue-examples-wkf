export interface Eating {
  name?: string
  price?: number
  monthBuy?: number
  imgUrl?: string
}

export interface Shop {
  name?: string
  Eatings?: Eating[]
  score?: number
}
