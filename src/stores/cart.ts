import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { IGood } from '@/types';

export interface ICartState {
  items: IGood[]
  checkedIds: number[]
}

export const useCartStore = defineStore('cart', () => {
const state : ICartState = reactive({
  items: [],
  checkedIds: [],
})

const total = computed(() => state.items.reduce((p, v) => p + v.cartCount,0))
const totalPrice = computed(() => state.items.reduce((p, v) => p + v.price * v.cartCount,0).toFixed(2))
const totalOldPrice = computed(() => state.items.reduce((p, v) => p + v.oldPrice * v.cartCount,0).toFixed(2))
const isAllChecked = computed(() => state.items.length === state.checkedIds.length)

const cartCountById = (id: number) => {
  return state.items.find((v) => v.id === id)?.cartCount
}

const pushProductToCart = (item: IGood) => {
  const cartItem = state.items.find((v) => v.id === item.id)
  if(cartItem){
    cartItem.cartCount ++
    return
  }
  item.cartCount = 1
  state.items.push(item)

  const isIncluded = state.checkedIds.includes(item.id)
  if(!isIncluded){
    state.checkedIds.push(item.id)
  }
}
const removeProductFromCart = (item: IGood) => {
  const cartItemIndex = state.items.findIndex((v) => v.id === item.id)
  const cartItem = state.items[cartItemIndex]
  if(cartItem){
    cartItem.cartCount --
    if(cartItem.cartCount === 0 ){
      state.items.splice(cartItemIndex, 1) //去掉该物品
      const index = state.checkedIds.findIndex(v => v === item.id)
      if(index > -1){
        state.checkedIds.splice(index, 1)
      }
    }
  }
}
const setCartItems = (items: IGood[]) => {
  state.items = items
  state.checkedIds = items.filter(v => v.checked).map(v => v.id)
}

const setCheckedIds = (ids: number[]) => {
  state.checkedIds = ids
}

const toggleAllChecked = (isAllChecked: boolean) => {
  const ids = isAllChecked ? state.items.map(v => v.id) : []
  state.checkedIds = ids
}

return{
  state,
  total,
  totalPrice,
  totalOldPrice,
  isAllChecked,
  cartCountById,
  pushProductToCart,
  removeProductFromCart,
  setCartItems,
  setCheckedIds,
  toggleAllChecked
}
 })