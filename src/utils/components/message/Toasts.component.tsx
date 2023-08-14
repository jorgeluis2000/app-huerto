import React, { ReactNode, useEffect } from "react"
import { SafeAreaView } from "react-native"
import { useToastStore } from "../../../stores/Toast.store"
import ToastComponent from "./Toast.component"
import { StyleSheet } from "react-native"
import { widthSizes } from "../../constants/styles.constant"

interface IToastsComponentProps {
    children?: ReactNode
    position: 'top' | 'bottom'
    iconClose?: boolean
    animation?: "sliceTop" | "opacity" | "sliceBottom" | "pop" | "sliceRight" | "sliceLeft"
}

export default function ToastsComponent({ position, iconClose = true, animation = "sliceTop" } : IToastsComponentProps) {
    const toasts = useToastStore(state => state.toasts)
    return (
        <SafeAreaView style={[styles["content"], (position === "top") ? styles["position-top"] : styles["position-bottom"]]}>
            {
                toasts.map((item) => (
                    <ToastComponent toast={item} key={item.id} iconClose={iconClose} animation={animation} />
                ))
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    "position-top": {
        width: "100%",
        position: "absolute",
        zIndex: 2,
        top: 86,
    },
    "position-bottom": {
        width: "100%",
        position: "absolute",
        zIndex: 2,
        bottom: 56,
    },
    "content": {
        width: widthSizes["w-full"],
        alignItems: "center",
    }
})