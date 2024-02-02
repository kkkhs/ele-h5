<script setup lang="ts">
import type { IGood } from '@/types';
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

//组件传参
interface IProps{
  data: IGood
}
const props = defineProps<IProps>()

const store = useCartStore()
const cartCount = computed(() => store.cartCountById(props.data.id))
const minus = () => {
  store.removeProductFromCart(props.data)
}
const add = () => {
  store.pushProductToCart(props.data)
}
</script>

<template>
  <div class="shop-cart-control">
    <Transition name="move">
      <div v-if="cartCount" class="minus" @click.stop="minus"></div>
    </Transition>
    <Transition name="fade">
      <div v-if="cartCount" class="count">{{ cartCount  }}</div>
    </Transition>
    <div class="add" @click.stop="add"></div>
  </div>
</template>

<style lang="scss" scoped>
.shop-cart-control{
  display: flex;
  align-items: center;
  height: 22px;

  .add {
    background: var(--op-primary-color);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    position: relative;
    &:before{
      display: block;
      position: absolute;
      top:50%;
      left: 50%;
      content: '';
      width: 50%;
      height: 2px;
      background: white;
      border-radius: 2px;
      transform: translate(-50%, -50%);
    }
    &:after{
      display: block;
      position: absolute;
      top:50%;
      left: 50%;
      content: '';
      width: 50%;
      height: 2px;
      background: white;
      border-radius: 2px;
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
  .count{
    width: 30px;
    text-align: center;

    &.fade-enter-active,
    &.fade-leave-active{
      transition: all 0.2s ease-out;
    }
    
    &.fade-enter-from,
    &.fade-leave-to{
      opacity: 0;
    }
  }

  .minus{
    background: white;
    border: 1px solid var(--op-primary-color);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    position: relative;
    &:before{
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      width: 50%;
      height: 2px;
      background: var(--op-primary-color);
      border-radius: 2px;
      transform: translate(-50%, -50%);
    }
    &.move-enter-active,
    &.move-leave-active{
      transition: all 0.3s ease-out;
    }
    
    &.move-enter-from,
    &.move-leave-to{
      opacity: 0;
      transform: translateX(34px) rotate(180deg);
    }
  }
}
</style>