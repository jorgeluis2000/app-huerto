import React, { ReactNode } from "react";
import { ViewStyle, ImageStyle, TextStyle, StyleProp } from "react-native";
import { View, useAnimationState, MotiTransitionProp, StyleValueWithReplacedTransforms } from "moti";

interface IViewSliceRightProps {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    transition?: MotiTransitionProp<StyleValueWithReplacedTransforms<ViewStyle | ImageStyle | TextStyle>> | undefined
}

export default function ViewSliceRightComponent ({ children, style, transition }: IViewSliceRightProps) {

    const sliceRightAnimation = useAnimationState({
        from: {
            opacity: 0,
            translateX: 80,
        },
        to: {
            opacity: 1,
            translateX: 0
        }
    })
    return (
        <View transition={(transition) ? transition : {  type: "timing", duration: 350 }} state={sliceRightAnimation} style={style} >
            {children}
        </View>
    )
}