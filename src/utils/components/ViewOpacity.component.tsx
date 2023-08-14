import React, { ReactNode, useEffect } from "react";
import { ViewStyle, ImageStyle, TextStyle, StyleProp } from "react-native";
import { View, useAnimationState, MotiTransitionProp, StyleValueWithReplacedTransforms } from "moti";

interface IViewOpacityProps {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    turn?: boolean
    transition?: MotiTransitionProp<StyleValueWithReplacedTransforms<ViewStyle | ImageStyle | TextStyle>> | undefined
}

export default function ViewOpacityComponent ({ children, style, transition, turn }: IViewOpacityProps) {
    
    const sliceOpacityAnimation = useAnimationState({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        }
    })


    useEffect(() => {
        if (!turn) {
            if (sliceOpacityAnimation.current === "from") {
                sliceOpacityAnimation.transitionTo("to")
            }
        } else {
            if (sliceOpacityAnimation.current === "to") {
                sliceOpacityAnimation.transitionTo("from")
            }
        }
    }, [turn])

    return (
        <View transition={(transition) ? transition : {  type: "timing", duration: 350 }} state={sliceOpacityAnimation} style={style} >
            {children}
        </View>
    )
}