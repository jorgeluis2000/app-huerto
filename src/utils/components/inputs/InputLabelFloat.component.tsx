import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Animated, StyleSheet, TextInput, View, useColorScheme } from "react-native";
import { border, colors, fontSize, rounded, shadown, widthSizes } from "../../constants/styles.constant";


interface IInputLabelFloatProps {
    id: string
    name: string
    valueText: string
    setValueText: Dispatch<SetStateAction<string>>
}

export default function InputLabelFloatComponent({ id, name, valueText, setValueText }: IInputLabelFloatProps) {
    const colorSchema = useColorScheme()
    const [onFocus, toggletOnFocus] = useState(false)
    const initPosY = 15
    const initPosX = 24
    const posY = -15
    const posX = 20

    const initScale = 1
    const finishScale = 0.85

    const yValue = useRef(new Animated.Value(initPosY)).current
    const xValue = useRef(new Animated.Value(initPosX)).current
    const scaleFloatLabel = useRef(new Animated.Value(initScale)).current

    function handdlerFocus() {
        const animationY = Animated.timing(yValue, { useNativeDriver: true, toValue: posY, duration: 150 })
        const animationX = Animated.timing(xValue, { useNativeDriver: true, toValue: posX, duration: 150 })
        const animationScale = Animated.timing(scaleFloatLabel, { useNativeDriver: true, toValue: finishScale, duration: 150 })

        Animated.parallel([
            animationY,
            animationX,
            animationScale
        ]).start(({ finished }) => {
            if (finished === true) {
                toggletOnFocus(true)
            }
        })
    }

    function handdlerBlur() {
        const animationY = Animated.timing(yValue, { useNativeDriver: true, toValue: initPosY, duration: 150 })
        const animationX = Animated.timing(xValue, { useNativeDriver: true, toValue: initPosX, duration: 150 })
        const animationScale = Animated.timing(scaleFloatLabel, { useNativeDriver: true, toValue: initScale, duration: 150 })
        if (valueText === "") {
            Animated.parallel([
                animationX,
                animationY,
                animationScale
            ]).start(({ finished }) => {
                if (finished) {
                    toggletOnFocus(false)
                }
            })
        }
    }

    return (
        <View style={[shadown["lg"], ]}>
            <Animated.Text style={[{ transform: [{ translateX: xValue }, { translateY: yValue }, { scale: scaleFloatLabel }] }, styles["style-text"], (onFocus) ? styles["text-focus"] : { color: colors["gray"]["400"] }, (colorSchema === "light") ? styles["bg-light"] : styles["bg-dark"]]}>
                {name}
            </Animated.Text>
            <TextInput 
            style={[styles["content-input"], (onFocus) ? styles["input-focus"] : {}, (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}
            placeholder="  "
            value={valueText}
            placeholderTextColor={"gray"}
            onBlur={handdlerBlur}
            onFocus={handdlerFocus}
            onChangeText={setValueText}
            autoCorrect={false}
            keyboardType="ascii-capable"
            id={id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    "content": {
        position: "relative",
        marginHorizontal: widthSizes["w-10"],
        marginBottom: widthSizes["w-10"]
    },
    "style-text": {
        fontSize: fontSize["base"]["font-size"],
        lineHeight: fontSize["base"]["line-height"],
        position: "absolute",
        color: colors.gray[300],
        padding: widthSizes["w-0.5"]
    },
    "text-focus": {
        color: colors.primary[600],
        zIndex: 10
    },
    "text-light": {
        color: colors.black
    },
    "text-dark": {
        color: colors.white
    },
    "bg-light": {
        backgroundColor: colors.white
    },
    "bg-dark": {
        backgroundColor: colors.gray[900]
    },
    "content-input": {
        display: "flex",
        paddingHorizontal: widthSizes["w-2.5"],
        paddingBottom: widthSizes["w-2.5"],
        paddingTop: widthSizes["w-4"],
        width: widthSizes["w-full"],
        backgroundColor: "transparent",
        borderRadius: rounded["lg"],
        borderWidth: border["border"],
        borderColor: colors.gray[600]
    },
    "input-focus": {
        borderColor: colors.primary[600]
    }
})