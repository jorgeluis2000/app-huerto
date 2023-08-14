
export interface IToastProps {
    id: string
    title: string
    message: string
    typeToast: "warning" | "load" | "success" | "error" | "default"
    show: boolean
    timeOut: number
}

export interface ToastProps {
    id?: string
    title?: string
    message?: string
    typeToast?: "warning" | "load" | "success" | "error" | "default"
    show?: boolean
    timeOut?: number
}