import { StyleSheet, Text, View, useColorScheme } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { colors, fontSize, fontWeight, rounded, widthSizes } from "../../../../../utils/constants/styles.constant";
import BtnBackgroundComponent from "../../../../../utils/components/btns/BtnBackground.component";


export default function EmptyListComponent() {
    const colorSchema = useColorScheme()

    function handdlerPress () {
    }

    return (
        <>
            <View style={[styles["content-image"]]}>
                <AnimatedLottieView style={[styles.image]} source={require("../../../../../../assets/jsons/loading-huertos.json")} autoPlay loop />
            </View>
            <View style={[{ marginTop: widthSizes["w-10"] }]}>
            <BtnBackgroundComponent eventPress={handdlerPress} >
                <Text style={[styles["text-base"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>Agrega tu primer huerto ahora
                    <View style={[styles["content-plus"]]}>
                        <Text style={[styles["text-plus"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>+</Text>
                    </View>
                </Text>
            </BtnBackgroundComponent>
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    "bg-light": {
        backgroundColor: colors["white"]
    },
    "bg-dark": {
        backgroundColor: colors["gray"]["900"]
    },
    "text-light": {
        color: colors.primary[500]
    },
    "text-dark": {
        color: colors.white
    },
    "content-image": {
        borderRadius: rounded["full"],
        overflow: "hidden"
    },
    "image": {
        width: widthSizes["w-48"],
        height: widthSizes["w-48"],
    },
    "text-base": {
        fontSize: fontSize["base"]["font-size"],
        lineHeight: fontSize["base"]["line-height"]
    },
    "content-plus": {
        position: "absolute",
    },
    "text-plus": {
        fontWeight: fontWeight["bold"],
        fontSize: fontSize["5xl"]["font-size"],
        lineHeight: fontSize["4xl"]["line-height"],
        marginLeft: widthSizes["w-5"],
        top: widthSizes["w-5"]
    }
})