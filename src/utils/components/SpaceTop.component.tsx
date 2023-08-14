import React from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { colors, widthSizes } from "../constants/styles.constant";

export default function SpaceTopComponent () {
    const colorSchema = useColorScheme()
    return (
        <View style={[styles.content, { backgroundColor: (colorSchema === "light") ? colors.primary[300] : colors.primary[600] }]}></View>
    )
}

const styles = StyleSheet.create({
    "content": {
        width: widthSizes["w-full"],
        padding: widthSizes["w-5"]
    }
})