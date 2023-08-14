import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BACK_ROUND_ICON } from "../../../../../assets/svgs/icons";
import { colors, widthSizes } from "../../../../utils/constants/styles.constant";
import { SvgXml } from "react-native-svg";

interface INavbarLeftProps {
    children?: ReactNode
    navigation: NativeStackNavigationProp<any>
}

export default function NavbarLeftComponent ({ navigation }: INavbarLeftProps) {
    const colorSchema = useColorScheme()
    return (
        <TouchableOpacity style={[styles.content]} onPress={() => navigation.goBack()} >
            <View>
                <SvgXml xml={BACK_ROUND_ICON} style={[styles["content-icon"], (colorSchema === 'light') ? styles["color-light"] : styles["color-dark"]]}  /* className={`${(colorScheme === 'light') ? "text-primary-600" : "text-gray-300"}`} */ />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    "content":{
        marginHorizontal: widthSizes["w-3"],
    },
    "content-icon": {
        width: widthSizes["w-6"],
        height: widthSizes["w-6"]
    },
    "color-light": {
        color: colors["primary"]["600"]
    },
    "color-dark": {
        color: colors["gray"]["300"]
    }
})