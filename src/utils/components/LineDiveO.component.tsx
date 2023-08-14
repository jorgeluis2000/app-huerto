import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, fontWeight, widthSizes } from "../constants/styles.constant";

export function LineDivideOCompoent() {
    return (
        <View style={[styles.content]}>
            <Text style={[styles.line]}></Text>
            <Text style={[styles.dive]}>  o  </Text>
            <Text style={[styles.line]}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    "line": {
        textAlign: "center",
        width: widthSizes["w-1/4"],
        height: widthSizes["w-0.5"],
        backgroundColor: colors.primary[500]
    },
    "dive": {
        textAlign: "center",
        marginTop: -4,
        color: colors.primary[500],
        fontWeight: fontWeight["bold"]
    },
    "content": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})