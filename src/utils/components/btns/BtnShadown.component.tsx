
import React, { ReactNode, useEffect, useState } from "react";
import { View, useAnimationState } from "moti"
import { StyleSheet, ViewStyle, StyleProp, useColorScheme, Pressable } from "react-native";
import { colors, fontWeight, rounded, shadown, widthSizes } from "../../constants/styles.constant";

interface IBtnShadownProps {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    eventPress: () => void
}

export default function BtnShadownComponent({ children, style, eventPress }: IBtnShadownProps) {
    const colorSchema = useColorScheme()
    const [pressBtn, setPressBtn] = useState(false)

    const btnBasicAnimation = useAnimationState({
        pressIn: {
            transition: {
                type: "timing",
                duration: 100
            },
            opacity: 0.8,
            shadowColor: colors.black,
            shadowOpacity: 0.25,
            backgroundColor: (colorSchema === "light") ? colors.primary[500] : colors.primary[500],
            shadowRadius: 3.84,
            elevation: 5,
        },
        pressOut: {
            transition: {
                type: "timing",
                duration: 450
            },
            opacity: 1,
            shadowColor: "transparent",
            backgroundColor: (colorSchema === "light") ? colors.primary[600] : colors.primary[600],
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0
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
        backgroundColor: colors.primary[600],
        borderRadius: rounded.lg,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    }
});