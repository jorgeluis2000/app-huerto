import React from "react"
import { Dimensions, StyleSheet, Text, useColorScheme } from "react-native"
import { colors, fontSize, fontWeight, widthSizes } from "../../../../utils/constants/styles.constant"
import { SafeAreaView } from "react-native-safe-area-context"
import ViewSliceRightComponent from "../../../../utils/components/ViewSliceRight.component"
import AnimatedLottieView from "lottie-react-native"


const { height } = Dimensions.get("screen")

export default function SplashComponent() {
    const colorSchema = useColorScheme()
    return (
        <SafeAreaView style={[styles["container-splash"]]}>
            <ViewSliceRightComponent>
                <AnimatedLottieView style={[styles["content-lotti"]]} source={require('../../../../../assets/jsons/splash-welcome.json')} loop={false} autoPlay={true} />
            </ViewSliceRightComponent>
            <ViewSliceRightComponent style={[{ width: widthSizes["w-full"], justifyContent: "center" }]}>
                <Text style={[styles["content-text"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>¡Disfruta de una nueva forma de hacer tendencia!</Text>
            </ViewSliceRightComponent>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    "container-splash": {
        display: "flex",
        width: widthSizes["w-full"],
        minHeight: height - 150,
        alignItems: "center",
        justifyContent: "center"
    },
    "content-lotti": {
        width: widthSizes["w-44"],
        height: widthSizes["w-44"]
    },
    "content-text": {
        fontWeight: fontWeight["bold"],
        width: widthSizes["w-full"],
        textAlign: "center",
        fontSize: fontSize["xl"]["font-size"],
        lineHeight: fontSize["xl"]["line-height"],
        marginTop: widthSizes["w-14"]
    },
    "text-dark": {
        color: colors["white"]
    },
    "text-light": {
        color: colors["black"]
    }
})