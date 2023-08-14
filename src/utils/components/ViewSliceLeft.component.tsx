import React, { ReactNode } from "react";
import { ViewStyle, ImageStyle, TextStyle, StyleProp } from "react-native";
import { View, useAnimationState, MotiTransitionProp, StyleValueWithReplacedTransforms } from "moti";

interface IViewSliceLefttProps {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    transition?: MotiTransitionProp<StyleValueWithReplacedTransforms<ViewStyle | ImageStyle | TextStyle>> | undefined
}

export default function ViewSliceLeftComponent ({ children, style, transition } : IViewSliceLefttProps) {
    const sliceLeftAnimation = useAnimationState({
        from: {
            opacity: 0,
            translateX: -80,
        },
        to: {
            opacity: 1,
            translateX: 0
        }
    })

    return (
        <View transition={(transition) ? transition : {  type: "timing", duration: 350 }} state={sliceLeftAnimation} style={style} >
            {children}
        </View>
    )
}