<script setup lang="ts">
import type { IDiscountContent, IShopDetail, IDiscount } from '@/types'
import { computed } from 'vue';
import { useToggle } from '@/use/useToggle';
// 优惠类型枚举
enum DiscountEnum {
  Reduction = 1,
  Dilivery = 2,
  Special = 3,
  Optional = 4
}

interface IProps{
  data: IShopDetail
}

const props = defineProps<IProps>()
const [isPopupShown, showPopup] = useToggle(false)


const topThreeServices = computed(() => props.data.services.slice(0,3))

const reduction = computed(() => {
  const reduction = props.data.discounts.find((v) => v.type === DiscountEnum.Reduction)
  return reduction ? reduction.content : []
})
const reductionLabel = computed(() => {
  return reduction.value.map(v => `满${v.if}减${v.count}`)
})

const formetter = (v:IDiscount) => {
  if(v.type === DiscountEnum.Reduction){
    return '全店' + v.content.map((cv:IDiscountContent) => `满${cv.if}减${cv.count}`).join('，')
  }
  if(v.type === DiscountEnum.Dilivery){
    return v.content.map((cv:IDiscountContent) => `满${cv.if}减${cv.count}，${cv.limit}`).join('，')
  }
  if(v.type === DiscountEnum.Special){
    return v.content.map((cv:IDiscountContent) => `特价 ${cv.count} 元起`).join('，')
  }
  if(v.type === DiscountEnum.Optional){
    return v.content.map((cv:IDiscountContent) => cv.label).join('，')
  }
  return ''
}

// const discountList = computed(() => {
//   return props.data.discounts.map((v) => {
//     return{
//       type: v.type,
//       label: v.label,
//       text: formetter(v)
//     }
//   })
// })
</script>

<template>
  <div class="shop-header">
    <div class="shop-header__info">
      <div class="info__left">
        <div class="shop-name op-ellipsis" >
          {{ data.shopName }}
          <span v-if="data.branch">({{ data.branch }})</span>
        </div>
        <div class="delivery">
          <div v-if="data.deliveryTags" class="delivery-tag op-thin-border">
            {{ data.deliveryTags[0] }}
          </div>
          <div class="delivery-time">{{ data.deliveryTime }}</div>
          <div class="monthly-count">月售 {{ data.monthlyCount }}</div>
        </div>
      </div>
      <div class="info__right">
        <img :src="data.postUrl">
      </div>
    </div>
    <div class="shop-header__service">
      <div v-for="v in topThreeServices" :key="v.label" class="service">
        <VanIcon name="passed"></VanIcon>
        {{ v.label }}
      </div>
    </div>
    <div class="shop-header__anouncement op-ellipsis">公告: {{ data.announcement }}</div>
    <div class="shop-header__redbags">
      <div v-for="v in data.redbags" :key="v.type" class="redbag">
        <span class="redbag-left">
          &yen; <span class="count">{{ v.count }}</span>
          <span>{{ v.if }}</span>
        </span>
        <span class="redbag-right">领</span>
      </div>
    </div>
    <div class="shop-header__discounts" @click="showPopup">
      <div class="flex">
        <div v-for="v in reductionLabel" :key="v" class="activity op-thin-border">
          {{ v }}
        </div>
      </div>
      <VanIcon name="arrow-down" color="rbg(207,207,207)"></VanIcon>
    </div>
  </div>

  <VanActionSheet class="shop-header__action-sheet" v-model:show="isPopupShown" title="红包优惠">
    <div class="content">
      <h4>红包</h4>
      <div v-for="v in reduction" :key="`${v.if}_${v.count}`" class="red-bag">
        <div class="l op-center">
          <div class="count">
            <span class="symbol">&yen;</span><span class="num">{{ v.count }}</span>
          </div>
        </div>
        <div class="m flex">
          <div class="type">店铺专享红包</div>
          <div class="detail">满&yen;{{ v.if }}可用2023.02.01到期</div>
        </div>
        <div class="r op-center">
          <div class="receive op-center">领取</div>
        </div>
      </div>
      <h4>商家会员专项</h4>
      <div class="menbership">
        <div class="l op-center flex-col">
          <div class="count"><span class="symbol">&yen;</span><span class="num">5</span></div>
          <div class="detail">满0.01元可用</div>
        </div>
        <div class="m flex">
          <div class="type">配送费满减</div>
          <div class="detail">全场可用，获得后30天内有效</div>
        </div>
        <div class="r op-center">
          <div class="open op-center">立即开通</div>
        </div>
      </div>
      <h4>优惠</h4>
      <div v-for="v in data.discounts" :key="v.type">
        <div>{{ v.label }}</div>
        <div>{{ formetter(v) }}</div>
      </div>
    </div>
  </VanActionSheet>
</template>

<style lang="scss">
.shop-header{
  background: white;
  border-radius: 10px;
  font-size: 12px;
  padding: 10px;
  margin: var(--op-page-padding);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  &__info{
    display: flex;
    margin-bottom: 5px;

    .info__left{
      flex: 1;
      .shop-name{
        width: 90%;
        font-size: 19px;
        font-weight: bold;
        margin: 6px 0 8px 0;
      }
      .delivery{
        display: flex;
        .delivery-tag{
          color: var(--op-primary-color);
          padding: 1px 5px;
          &::before{
            border: 1px solid var(--op-primary-color);
          }
        }
        .delivery-time{
          margin-left: 10px;
        }
      }
    }
    .info__right{
      img{
        width: 50px;
        height: 50px;
      }
    }
  }

  &__service{
    display: flex;
    margin-bottom: 5px;

    .serbice{
      margin-right: 5px;
    }
  }

  &__anouncement{
    color: gray;
  }

  &__redbags{
    display: flex;
    margin-top: 10px;
    margin-bottom: 5px;

    .redbag{
      color: white;
      margin-right: 5px;
      display: flex;
      .redbag-left{
        display: flex;
        width: 100%;
        text-align: center;
        border-radius: 3px;
        line-height: 16px;
        padding: 3px 6px;
        background: rgb(247, 68, 68);
        .count{
          font-size: 16px;
          padding: 0 4px;
          font-weight: bold;
        }
      }
      .redbag-right{
        align-items: center;
        background: red;
        text-align: center;
        border-radius: 3px;
        font-size: 16px;
        padding: 3px 8px;
        line-height: 16px;
        font-weight: bold;
      }
    }
  }

  &__discounts{
    display: flex;
    margin-top: 10px;

    .flex{
      flex: 1;
    }
    .activity{
      display: inline-block;
      color: rgb(247, 68, 68);
    }
  }

  &__action-sheet{
    background: rgb(244, 244, 244) !important;

    .content{
      margin: 20px 10px;
      h4{
        font-size: 15px;
        margin: 10px 0;
      }
      .red-bag,
      .menbership{
        display: flex;
        background: white;
        margin-bottom: 10px;
        padding: 25px 0;
        border-radius: 10px;
      }
      .red-bag{
        .count{
          color: rgb(252, 76, 60);
          display: flex;
          align-items: flex-end;
        }
      }
      .menbership{
        .count{
          color: rgb(133, 71, 0);
        }
      }
      .symbol{
        font-weight: bold;
      }
      .num{
        font-size: 30px;
        line-height: 0.7;
        font-weight: bold;
        margin-bottom: 3px;
      }
      .l{
        width: 90px;
        text-align: center;
      }
      .flex-col{
        flex-direction: column;
      }
      .type{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .detail{
        font-size: 12px;
        color: var(--van-gray-7);
      }
      .r{
        width: 90px;
        .receive{
          font-size: 13px;
          width: 75px;
          height: 30px;
          border-radius: 15px;
          color: white;
          background: linear-gradient(to right, rgb(253, 113, 78), rgb(255, 84, 84));
        }
        .open{
          font-size: 13px;
          width: 75px;
          height: 30px;
          background: linear-gradient(to right, rgb(241, 216, 191), rgb(255, 196, 137));
          color: rgb(86, 42, 31);
          border-radius: 15px;
        }
      }
      .op-center{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .flex{
        flex: 1;
      }
    }
  }
}
</style>