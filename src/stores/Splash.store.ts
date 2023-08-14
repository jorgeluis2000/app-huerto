import { create } from 'zustand'


interface ISplashState {
    active: boolean
    changeActive: () => void
}

export const useSplashStore = create<ISplashState>((set, get) => ({
    active: true,
    changeActive: () => set(element => ({ active: !element.active }))
}))