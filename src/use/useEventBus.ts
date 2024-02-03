import { EventEmitter } from "@/utils/event";

let eventBus:EventEmitter

export function useEventBus() {
  // 单例模式
  if(!eventBus){
    eventBus = new EventEmitter()
  }
  return eventBus
}