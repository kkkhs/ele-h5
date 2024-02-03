import { onBeforeUnmount, onDeactivated, watch } from "vue"
import { onMountedOrActivated } from "./onMountedOrActivated"

let totalLockCount = 0

const BODY_LOCK_CLASS = 'op-overflow-hidden'

export function useLockScroll(shouldLock: () => boolean){
  const lock = () => {
    if(!totalLockCount){
      document.body.classList.add(BODY_LOCK_CLASS)
    }
    totalLockCount ++
  }
  const unlock = () => {
    if(totalLockCount){
      totalLockCount --
      if(!totalLockCount){
        document.body.classList.remove(BODY_LOCK_CLASS)
      }
    }
  }

  onMountedOrActivated(() => {
    if(shouldLock()){
      lock()
    }
  })
  const destroy = () => shouldLock() && unlock()
  onDeactivated(() => destroy )
  onBeforeUnmount(() => destroy)

  watch(shouldLock, (v) => {
    if(v){
      lock()
    }else{
      unlock()
    }
  })
}