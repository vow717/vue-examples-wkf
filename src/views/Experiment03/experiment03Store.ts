import { type Order, type Shop } from './food/foodInf'
import { ref } from 'vue'

const ShopsR = ref<Shop[]>([])
const ShopR = ref<Shop>({})
const CostR = ref<number>(0)
const OrdersR = ref<Order[]>([])

const store = { ShopsR, ShopR, CostR, OrdersR }

export const useStore = () => {
  return store
}
