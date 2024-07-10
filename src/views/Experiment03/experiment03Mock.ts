import { ref } from 'vue'
import type { Shop } from './food/FoodInf'

const shops: Shop[] = [
  {
    id: '1',
    name: '肯德基',
    score: 4.4,
    Eatings: [
      {
        name: '汉堡',
        price: 7,
        monthBuy: 114,
        imgUrl: '/src/assets/foodImg/1-1.jpg'
      },
      {
        name: '薯条',
        price: 8,
        monthBuy: 101,
        imgUrl: '/src/assets/foodImg/1-2.webp'
      },
      {
        name: '鸡腿',
        price: 6,
        monthBuy: 89,
        imgUrl: '/src/assets/foodImg/1-3.jpg'
      }
    ]
  },
  {
    id: '2',
    name: '沙县',
    score: 4.7,
    Eatings: [
      {
        name: '蒸饺',
        price: 6,
        monthBuy: 144,
        imgUrl: '/src/assets/foodImg/2-1.webp'
      },
      {
        name: '炒粉',
        price: 5,
        monthBuy: 234,
        imgUrl: '/src/assets/foodImg/2-2.webp'
      },
      {
        name: '肉汤',
        price: 6,
        monthBuy: 125,
        imgUrl: '/src/assets/foodImg/2-3.webp'
      }
    ]
  },
  {
    id: '3',
    name: '火锅',
    score: 4.5,
    Eatings: [
      {
        name: '涮牛肉',
        price: 20,
        monthBuy: 78,
        imgUrl: '/src/assets/foodImg/3-1.webp'
      },
      {
        name: '毛肚',
        price: 28,
        monthBuy: 99,
        imgUrl: '/src/assets/foodImg/3-2.webp'
      },
      {
        name: '涮羊肉',
        price: 36,
        monthBuy: 69,
        imgUrl: '/src/assets/foodImg/3-3.webp'
      }
    ]
  }
]

const shopsR = ref<Shop[]>([])
export const fetchShopsMock = async (): Promise<Shop[]> => {
  return new Promise<Shop[]>((resolve) => {
    setTimeout(() => {
      shopsR.value = shops
      resolve(shopsR.value)
    }, 2000)
  })
}

const ShopR = ref<Shop>({})
export const fetchShopByShopIdMock = async (ShopId: string): Promise<Shop> => {
  return new Promise<Shop>((resolve) => {
    setTimeout(() => {
      ShopR.value = shops.find((shop) => shop.id === ShopId) || {}
      resolve(ShopR.value)
    }, 1000)
  })
}
