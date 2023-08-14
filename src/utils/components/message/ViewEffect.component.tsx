import React, { ReactNode, useEffect, useState } from "react";
import { MotiTransitionProp, StyleValueWithReplacedTransforms, UseAnimationState, View, useAnimationState } from "moti";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

interface IViewEffectProps {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    transition?: MotiTransitionProp<StyleValueWithReplacedTransforms<ViewStyle | ImageStyle | TextStyle>> | undefined
    animation?: "sliceTop" | "opacity" | "sliceBottom" | "pop" | "sliceRight" | "sliceLeft"
    show: boolean
}

export default function ViewEffectComponent({ children, transition, style, animation = "opacity", show}: IViewEffectProps) {

    const effectOpacity = useAnimationState({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        }
    })

    const effectSliceRight = useAnimationState({
        from: {
            opacity: 0,
            translateX: -100
        },
        to: {
            opacity: 1,
            translateX: 0,
        }
    })

    const effectSliceLeft = useAnimationState({
        from: {
            opacity: 0,
            translateX: 100
        },
        to: {
            opacity: 1,
            translateX: 0,
        }
    })

    const effectSliceBottom = useAnimationState({
        from: {
            opacity: 0,
            translateY: 100
        },
        to: {
            opacity: 1,
            translateY: 0,
        }
    })

    const effectSliceUp = useAnimationState({
        from: {
            opacity: 0,
            translateY: -100
        },
        to: {
            opacity: 1,
            translateY: 0,
        }
    })

    const effectPop = useAnimationState({
        from: {
            opacity: 0,
            scale: 0
        },
        to: {
            opacity: 1,
            scale: 1
        }
    })

    useEffect(() => {
        if (
            effectOpacity.current === "from" ||
            effectPop.current === "from" ||
            effectSliceBottom.current === "from" ||
            effectSliceUp.current === "from" ||
            effectSliceRight.current === "from" ||
            effectSliceLeft.current === "from"
        ) {
            effectOpacity.transitionTo("to")
            effectPop.transitionTo("to")
            effectSliceBottom.transitionTo("to")
            effectSliceUp.transitionTo("to")
            effectSliceRight.transitionTo("to")
            effectSliceLeft.transitionTo("to")
        }
    }, [])

    useEffect(()=>{
        if (!show) {
            if (
                effectOpacity.current === "to" ||
                effectPop.current === "to" ||
                effectSliceBottom.current === "to" ||
                effectSliceUp.current === "to" ||
                effectSliceRight.current === "to" ||
                effectSliceLeft.current === "to"
            ) {
                effectOpacity.transitionTo("from")
                effectPop.transitionTo("from")
                effectSliceBottom.transitionTo("from")
                effectSliceUp.transitionTo("from")
                effectSliceRight.transitionTo("from")
                effectSliceLeft.transitionTo("from")
            }
        }
    }, [show])


    return (
        <View transition={(transition) ? transition : {  type: "timing", duration: 350 }} state={
            (animation === "opacity") ? effectOpacity :
            (animation === "sliceRight") ? effectSliceRight :
            (animation === "sliceLeft") ? effectSliceLeft :
            (animation === "sliceBottom") ? effectSliceBottom :
            (animation === "sliceTop") ? effectSliceUp : effectPop
        } style={style}>
            {children}
        </View>
    )
}