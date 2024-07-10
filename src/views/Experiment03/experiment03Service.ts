import { useStore } from './Experiment03Store'
import type { Shop, Eating } from './food/FoodInf'
import { fetchShopByShopIdMock, fetchShopsMock } from './Experiment03Mock'

const { ShopsS, ShopS, OrdersS } = useStore()

export const fetchShopService = async (ShopId: string): Promise<Shop> => {
  // 检查缓存对象是否已经包含指定的ShopId
  if (!ShopS.value[ShopId]) {
    const shop = await fetchShopByShopIdMock(ShopId)
    ShopS.value[ShopId] = shop
    console.log(`${shop.name}`)
  }
  return ShopS.value[ShopId]
}

export const fetchShopsService = async (): Promise<Shop[]> => {
  //缓存
  if (ShopsS.value.length !== 0) {
    ShopsS.value = await fetchShopsMock()
  }
  return ShopsS.value
}

export const fetchOrdersService = () => {
  return OrdersS.value
}
export const addOrderService = (eating: Eating) => {
  const existingOrder = OrdersS.value.find((o) => eating === o.item)
  if (existingOrder) {
    existingOrder.quantity += 1
  } else {
    OrdersS.value.push({ item: eating, quantity: 1 })
  }
}
export const delOrderService = (eating: Eating) => {
  const existingOrder = OrdersS.value.find((o) => eating === o.item)
  if (existingOrder) {
    existingOrder.quantity -= 1
    if (existingOrder.quantity === 0) {
      OrdersS.value = OrdersS.value.filter((o) => o.item !== eating)
    }
  }
}
export const getQuantityService = (eating: Eating) => {
  const existingOrder = OrdersS.value.find((o) => o.item === eating)
  return existingOrder ? existingOrder.quantity : 0
}
