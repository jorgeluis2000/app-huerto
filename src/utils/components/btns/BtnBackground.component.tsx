
import React, { ReactNode, useEffect, useState } from "react";
import { View, useAnimationState } from "moti"
import { StyleSheet, ViewStyle, StyleProp, useColorScheme, Pressable } from "react-native";
import { colors, fontWeight, rounded, shadown, widthSizes } from "../../constants/styles.constant";

interface IBtnBackgroundProps {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    eventPress: () => void
}

export default function BtnBackgroundComponent({ children, style, eventPress }: IBtnBackgroundProps) {
    const colorSchema = useColorScheme()
    const [pressBtn, setPressBtn] = useState(false)

    const btnBasicAnimation = useAnimationState({
        pressIn: {
            transition: {
                type: "timing",
                duration: 100
            },
            // opacity: 0.8,
            backgroundColor: (colorSchema === "light") ? colors.primary[200] : colors.primary[400],
        },
        pressOut: {
            transition: {
                type: "timing",
                duration: 600
            },
            // opacity: 1,
            backgroundColor: "transparent"
        }
    })

    useEffect(() => {
        if (pressBtn) {
            btnBasicAnimation.transitionTo("pressIn")
        } else {
            btnBasicAnimation.transitionTo("pressOut")
        }
    }, [pressBtn])


    function handdlerPress() {
        setPressBtn(true)
        setTimeout(() => eventPress(), 20)
    }

    function handdlerLongPress() {
        setPressBtn(true)
    }

    function handdlerPressOut() {
        setPressBtn(false)
    }

    return (
        <Pressable onPress={() => handdlerPress()} onLongPress={() => handdlerLongPress()} onPressOut={() => handdlerPressOut()}>
            <View state={btnBasicAnimation} style={[styles.btn, style]}>
                {children}
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    btn: {
        paddingVertical: widthSizes["w-3"],
        paddingHorizontal: widthSizes["w-3"],
        borderRadius: rounded.lg,
    }
});