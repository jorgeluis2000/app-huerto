import React from "react";
import { SvgXml } from "react-native-svg";
import { Alert, StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native";
import { colors, rounded, widthSizes } from "../../../../utils/constants/styles.constant";
import { INFO_ICON } from "../../../../../assets/svgs/icons";


export default function NavbarRightComponent () {
    const colorSchema = useColorScheme()
    return (
        <TouchableOpacity style={[styles["content-press"]]}  onPress={() => Alert.alert("Información", "Este es un mensaje informativo temporal.")}>
            <View style={[styles["content-btn"], (colorSchema === "light") ? styles["bg-btn-light"] : styles["bg-btn-dark"]]}>
                <SvgXml xml={INFO_ICON} style={[styles["style-icon"], (colorSchema === "light") ? styles["icon-light"] : styles["icon-dark"]]} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    "content-press": {
        marginHorizontal: widthSizes["w-3"]
    },
    "content-btn": {
        borderRadius: rounded["full"],
        padding: widthSizes["w-0.5"]
    },
    "style-icon": {
        width: widthSizes["w-4"],
        height: widthSizes["w-4"]
    },
    "icon-dark": {
        color: colors.white
    },
    "icon-light": {
        color: colors.primary[600]
    },
    "bg-btn-light": {
        backgroundColor: "transparent"
    },
    "bg-btn-dark": {
        backgroundColor: colors.primary[500]
    },  
})