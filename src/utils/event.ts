type Fn = (...args: any[]) => void

interface Events {
  [name: string]: Fn[]
}

export class EventEmitter {
  events: Events
  constructor() {
    this.events = {}
  }
  
  on(type: string, fn: Fn){
    if(!this.events[type]){
      this.events[type] = []
    }

    this.events[type].push(fn)
  }

  off(type?: string, fn?: Fn){
    if(!type && !fn){
      this.events = {}
      return this
    }
    if(type){
      if(!fn){
        this.events[type] = []
        return this
      }
      const events = this.events[type]
      if(!events){
        return this
      }
      let count = events.length
      while(count --){
        if(events[count] === fn){
          events.splice(count, 1)
        }
      }
      return this
    }
  }

  emit(type: string, ...args: any[]) {
    const events = this.events[type]
    if(!events){
      return
    }
    let ret
    for ( let i  = 0; i < events.length; i ++){
      const fn = events[i]
      if(fn){
        ret = fn.apply(this, args) as unknown
        if(ret === true){
          return ret
        }
      }
    }
  }

  destory() {
    this.events = {}
  }
}