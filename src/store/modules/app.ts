import { defineStore } from 'pinia'
import { store } from '@/store'

export type appStoreType = {
  appId?: number
  errorList: NullAble<any[]>
  sidebar: {
    opened: boolean
  }
}

export const useAppStore = defineStore({
  id: 'appStore',
  state: (): appStoreType => ({
    errorList: null,
    sidebar: {
      opened: false
    }
  }),
  getters: {
    getErrorList(): any[] {
      return this.errorList || []
    }
  },
  actions: {
    toggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened
    }
  }
})

// Need to be used outside the setup
export function useErrorLogStoreWithOut() {
  return useAppStore(store)
}
