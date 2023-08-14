import React, { ReactNode, useEffect } from "react";
import { ViewStyle, ImageStyle, TextStyle, StyleProp } from "react-native";
import { View, useAnimationState, MotiTransitionProp, StyleValueWithReplacedTransforms } from "moti";
import { widthSizes } from "../constants/styles.constant";

interface IViewExpandVerticalProps {
    children?: ReactNode
    style?: StyleProp<ViewStyle>
    turn?: boolean
    transition?: MotiTransitionProp<StyleValueWithReplacedTransforms<ViewStyle | ImageStyle | TextStyle>> | undefined
}

export default function ViewExpandVerticalComponent ({ children, style, transition, turn }: IViewExpandVerticalProps) {
    
    const sliceOpacityAnimation = useAnimationState({
        from: {
            opacity: 0.5,
            height: 0,
            transition: {
                type: "timing",
                duration: 350
            }
        },
        to: {
            height: widthSizes["w-10"],
            opacity: 1,
            transition: {
                type: "timing",
                duration: 150
            }
        }
    })

    useEffect(() => {
        if (sliceOpacityAnimation.current === "from") {
            sliceOpacityAnimation.transitionTo("to")
        }
    }, [])


    useEffect(() => {
        if (turn) {
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