import { create } from 'zustand'
import { ILoggIn, ILoggInProps } from '../utils/interfaces/LoggInProp'


interface ILoggInState {
    loggIn: ILoggIn
    updateLoggIn: (props: ILoggInProps) => void
    resetLoggIn: () => void
}

export const useLoggInStore = create<ILoggInState>((set, get) => ({
    loggIn: { token: "", expired: "", thereExpired: false, nick: "" },
    resetLoggIn: () => set({ loggIn: { token: "", expired: "", thereExpired: false, nick: "" } }),
    updateLoggIn: ({ token, expired = "", thereExpired = false, nick }) => {
        set({ loggIn: { expired, token, thereExpired, nick } })
    }
}))