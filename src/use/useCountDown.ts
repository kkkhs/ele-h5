import { ref, computed } from 'vue'
import { rAF, cancelRAF } from '@/utils/raf'

type CurrentTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
  total: number
}

type UseCountDownOptions = {
  time: number
  millisecond?: boolean
  onChange?: (current: CurrentTime) => void
  onFinish?: () => void
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

const parseTime = (time: number) => {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    total: time,
  }
}

const isSameSecond = (time1: number, time2: number) => {
  return Math.floor(time1 / SECOND) === Math.floor(time2 / SECOND)
}

export function useCountDown(options: UseCountDownOptions) {
  let rafId: number
  let endTime: number
  let counting: boolean
  const remain = ref(options.time)
  const current = computed(() => parseTime(remain.value))

  const pause = () => {
    counting = false
    cancelRAF(rafId)
  }

  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)

  const setRemain = (value: number) => {
    remain.value = value
    options.onChange?.(current.value)

    if (value === 0) {
      pause()
      options.onFinish?.()
    }
  }

  const microTick = () => {
    rafId = rAF(() => {
      if (counting) {
        const remainRemain = getCurrentRemain()
        setRemain(remainRemain)

        if (remain.value > 0) {
          microTick()
        }
      }
    })
  }

  const macroTick = () => {
    rafId = rAF(() => {
      if (counting) {
        const remainRemain = getCurrentRemain()
        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain)
        }

        if (remain.value > 0) {
          macroTick()
        }
      }
    })
  }

  const tick = () => {
    if (options.millisecond) {
      microTick()
    } else {
      macroTick()
    }
  }
  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value
      counting = true
      tick()
    }
  }
  const reset = (totalTime = options.time) => {
    pause()
    remain.value = totalTime
  }
  return {
    start,
    pause,
    reset,
    current,
  }
}
