import { type Order, type Shop } from './food/FoodInf'
import { ref } from 'vue'

const ShopsS = ref<Shop[]>([])
const ShopS = ref<{ [key: string]: Shop }>({})
const OrdersS = ref<Order[]>([])

const store = { ShopsS, ShopS, OrdersS }

export const useStore = () => {
  return store
}
