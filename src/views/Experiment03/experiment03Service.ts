import { useStore } from './experiment03Store'
import type { Shop, Order, Eating } from './food/foodInf'
import { fetchShopByShopIdMock, fetchShopsMock } from './experiment03Mock'

const { ShopsR, ShopR, CostR, OrdersR } = useStore()

const fetchShopService = async (ShopId: string): Promise<Shop> => {
  ShopR.value = await fetchShopByShopIdMock(ShopId)
  return ShopR.value
}

const fetchShopsService = async (): Promise<Shop[]> => {
  ShopsR.value = await fetchShopsMock()
  return ShopsR.value
}
const fetchCostService = async (): Promise<number> => {
  // 初始化总花费
  CostR.value = 0

  // 检查 OrdersR.value 是否为空数组
  if (OrdersR.value.length > 0) {
    OrdersR.value.forEach((o) => {
      CostR.value += o.quantity * (o.item.price ?? 0)
    })
    return CostR.value
  } else {
    return 0
  }
}
const fetchOrdersService = async (): Promise<Order[]> => {
  return OrdersR.value
}
const addOrderService = async (eating: Eating) => {
  const existingOrder = OrdersR.value.find((o) => eating === o.item)
  if (existingOrder) {
    existingOrder.quantity += 1
  } else {
    OrdersR.value.push({ item: eating, quantity: 1 })
  }
  await fetchCostService() // 更新总花费
}
const delOrderService = async (eating: Eating) => {
  const existingOrder = OrdersR.value.find((o) => eating === o.item)
  if (existingOrder) {
    existingOrder.quantity -= 1
    if (existingOrder.quantity === 0) {
      OrdersR.value = OrdersR.value.filter((o) => o.item !== eating)
    }
  }
  await fetchCostService() // 更新总花费
}
const getQuantityService = async (eating: Eating) => {
  const existingOrder = OrdersR.value.find((o) => o.item === eating)
  return existingOrder ? existingOrder.quantity : 0
}
const store = {
  fetchShopService,
  fetchShopsService,
  fetchCostService,
  fetchOrdersService,
  addOrderService,
  delOrderService,
  getQuantityService
}

export const useService = () => {
  return store
}
