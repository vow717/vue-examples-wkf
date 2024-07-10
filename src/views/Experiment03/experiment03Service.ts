import { useStore } from './Experiment03Store'
import type { Shop, Eating } from './food/FoodInf'
import { fetchShopByShopIdMock, fetchShopsMock } from './Experiment03Mock'

const { ShopsR, ShopR, OrdersR } = useStore()

export const fetchShopService = async (ShopId: string): Promise<Shop> => {
  // 检查缓存对象是否已经包含指定的ShopId
  if (!ShopR.value[ShopId]) {
    const shop = await fetchShopByShopIdMock(ShopId)
    ShopR.value[ShopId] = shop
    console.log(`${shop.name}`)
  }
  return ShopR.value[ShopId]
}

export const fetchShopsService = async (): Promise<Shop[]> => {
  //缓存
  if (ShopsR.value.length === 0) {
    ShopsR.value = await fetchShopsMock()
  }
  return ShopsR.value
}

export const fetchOrdersService = () => {
  return OrdersR.value
}
export const addOrderService = (eating: Eating) => {
  const existingOrder = OrdersR.value.find((o) => eating === o.item)
  if (existingOrder) {
    existingOrder.quantity += 1
  } else {
    OrdersR.value.push({ item: eating, quantity: 1 })
  }
}
export const delOrderService = (eating: Eating) => {
  const existingOrder = OrdersR.value.find((o) => eating === o.item)
  if (existingOrder) {
    existingOrder.quantity -= 1
    if (existingOrder.quantity === 0) {
      OrdersR.value = OrdersR.value.filter((o) => o.item !== eating)
    }
  }
}
export const getQuantityService = (eating: Eating) => {
  const existingOrder = OrdersR.value.find((o) => o.item === eating)
  return existingOrder ? existingOrder.quantity : 0
}
