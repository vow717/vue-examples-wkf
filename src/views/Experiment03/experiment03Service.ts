import { useStore } from './Experiment03Store'
import type { Eating } from './food/FoodInf'
import { fetchShopByShopIdMock, fetchShopsMock } from './Experiment03Mock'

const { ShopsS, ShopS, OrdersS } = useStore()

export const fetchShopService = async (ShopId: string) => {
  // 检查缓存对象是否已经包含指定的ShopId
  if (ShopS.value[ShopId]) {
    return ShopS.value[ShopId]
  }
  const shopItem = await fetchShopByShopIdMock(ShopId)
  ShopS.value[ShopId] = shopItem
  console.log(`${shopItem.name}`)
  return shopItem
}

export const fetchShopsService = async () => {
  //缓存
  if (ShopsS.value.length !== 0) {
    return ShopsS
  }
  ShopsS.value = await fetchShopsMock()
  return ShopsS
}

export const fetchOrdersService = () => {
  return OrdersS
}
export const addOrderService = (eating: Eating) => {
  const existingOrder = OrdersS.value.find((o) => eating.name === o.item.name)
  if (existingOrder) {
    existingOrder.quantity += 1
    console.log(`食品:${eating.name}数量+1`)
  } else {
    OrdersS.value.push({ item: eating, quantity: 1 })
    console.log(`已添加新的食品:${eating.name}`)
  }
}
export const delOrderService = (eating: Eating) => {
  const existingOrder = OrdersS.value.find((o) => eating.name === o.item.name)
  if (!existingOrder) {
    console.log(`${eating.name}未找到订单，无法删除`)
    return
  }
  existingOrder.quantity -= 1
  if (existingOrder.quantity > 0) {
    console.log(`食品:${eating.name}数量-1`)
    return
  }
  OrdersS.value = OrdersS.value.filter((o) => o.item.name !== eating.name)
  console.log(`已删除整个食品:${eating.name}`)
}
