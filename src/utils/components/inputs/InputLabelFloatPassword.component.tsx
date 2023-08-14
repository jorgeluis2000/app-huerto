import React, { Dispatch, SetStateAction, useRef, useState } from "react"
import { Animated, StyleSheet, TextInput, TouchableOpacity, View, useColorScheme } from "react-native"
import { border, colors, fontSize, rounded, shadown, widthSizes } from "../../constants/styles.constant"
import { SvgXml } from "react-native-svg"


interface IInputLabelFloatPasswordProps {
    id: string
    name: string
    valuePassword: string
    setValuePassword: Dispatch<SetStateAction<string>>
}

export default function InputLabelFloatPasswordComponent({ id, name, setValuePassword, valuePassword }: IInputLabelFloatPasswordProps) {
    const colorSchema = useColorScheme()
    const [hidePassword, toggletHidePassword] = useState(true)
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

    function pressToggleHidePassword() {
        toggletHidePassword(!hidePassword)
    }

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
        if (valuePassword === "") {
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

    const eyeSvg = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z" fill="currentColor"></path> </g></svg>
    `
    const hideEyeSvg = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 19.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071Z" fill="currentColor"></path> <path d="M12 5C13.2011 5 14.394 5.21361 15.5362 5.63535L13.9368 7.23482C13.2953 7.0777 12.6458 7 12 7C9.07319 7 6.06862 8.59614 4.09173 11.9487C4.74631 13.0987 5.52178 14.046 6.37447 14.7971L4.95845 16.2131C3.88666 15.248 2.93477 14.037 2.16029 12.5876C1.94361 12.1821 1.94637 11.6844 2.17003 11.2807C4.45796 7.15186 8.18777 5 12 5Z" fill="currentColor"></path> <path d="M12 9C12.056 9 12.1117 9.00154 12.167 9.00457L9.00457 12.167C9.00154 12.1117 9 12.056 9 12C9 10.3431 10.3431 9 12 9Z" fill="currentColor"></path> <path d="M14.9954 11.833L11.833 14.9954C11.8883 14.9985 11.944 15 12 15C13.6569 15 15 13.6569 15 12C15 11.944 14.9985 11.8883 14.9954 11.833Z" fill="currentColor"></path> <path d="M12 17C11.355 17 10.7061 16.9216 10.0654 16.763L8.46807 18.3604C9.60812 18.7849 10.7998 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807C21.0543 9.88089 20.1128 8.7083 19.0587 7.76977L17.6421 9.18635C18.4837 9.91776 19.2525 10.8366 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="currentColor"></path> </g></svg>
    `

    return (
        <View style={[shadown["lg"],]}>
            <Animated.Text style={[{ transform: [{ translateX: xValue }, { translateY: yValue }, { scale: scaleFloatLabel }] }, styles["style-text"], (onFocus) ? styles["text-focus"] : { color: colors["gray"]["400"] }, (colorSchema === "light") ? styles["bg-light"] : styles["bg-dark"]]}>
                {name}
            </Animated.Text>
            <TextInput
                style={[styles["content-input"], (onFocus) ? styles["input-focus"] : {}, (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}
                placeholder="  "
                secureTextEntry={hidePassword}
                value={valuePassword}
                placeholderTextColor={"gray"}
                onBlur={handdlerBlur}
                onFocus={handdlerFocus}
                onChangeText={setValuePassword}
                autoCorrect={false}
                keyboardType="ascii-capable"
                id={id}
            />
            <TouchableOpacity style={[styles["style-press-eye"]]} onPress={() => pressToggleHidePassword()}  >
                <SvgXml xml={eyeSvg} style={[styles["style-eye"], (!hidePassword) ? styles["hidden"] : {}]} />
                <SvgXml xml={hideEyeSvg} style={[styles["style-eye"], (hidePassword) ? styles["hidden"] : {}]} />
            </TouchableOpacity>

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
    },
    "hidden": {
        display: "none"
    },
    "style-eye": {
        width: widthSizes["w-6"],
        height: widthSizes["w-6"],
        color: colors.primary[500]
    },
    "style-press-eye": {
        position: "absolute",
        right: widthSizes["w-5"],
        top: widthSizes["w-4"]
    }
})