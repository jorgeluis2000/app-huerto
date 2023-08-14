import { create } from 'zustand'
import { IToastProps } from '../utils/interfaces/ToastProp'

interface IToastState {
    toasts: IToastProps[]
    addToast: (props:IToastProps) => IToastProps
    removeToast: (id: string) => IToastProps | undefined
    updateToast: (id: string, newToast: IToastProps) => IToastProps | undefined
}

export const useToastStore = create<IToastState>((set, get)=>({
    toasts: [],
    addToast: (props : IToastProps) => {
        set((state) => ({ toasts: [props, ...state.toasts] }))
        return props
    },
    removeToast: (id:string) => {
        let toast = get().toasts.find(x => x.id === id)
        set(state => ({ toasts: [...state.toasts.filter(x=>x.id !== id)]}))
        return toast
    },
    updateToast: (id:string, newToast) => {
        set(state =>({ toasts: state.toasts.map((message)=> {
            if(message.id === id) {
                message = {...newToast}
            }
            return message
        })}))
        return newToast
    }
}))