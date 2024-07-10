import { type Order, type Shop } from './food/FoodInf'
import { ref } from 'vue'

const ShopsR = ref<Shop[]>([])
const ShopR = ref<{ [key: string]: Shop }>({})
const OrdersR = ref<Order[]>([])

const store = { ShopsR, ShopR, OrdersR }

export const useStore = () => {
  return store
}
