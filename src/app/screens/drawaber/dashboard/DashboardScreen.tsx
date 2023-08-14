import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View, useColorScheme } from "react-native";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { colors } from "../../../../utils/constants/styles.constant";


const { height } = Dimensions.get("screen")

export default function DashboardScreen() {
    const colorSchema = useColorScheme()
    const navigator = useNavigation()

    useLayoutEffect(() => {
        const options: DrawerNavigationOptions = {
            title: "Dashboard",
            headerTransparent: true
            // headerShadowVisible: false
        }
        navigator.setOptions(options)
    }, [])
    return (
        <View style={[styles["content"], (colorSchema === "light") ? styles["bg-light"] : styles["bg-dark"]]}>
            <Text>screen Dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    "bg-light": {
        backgroundColor: colors["white"]
    },
    "bg-dark": {
        backgroundColor: colors["gray"]["900"]
    },
    "content": {
        alignItems: "center",
        justifyContent: "center",
        minHeight: height - 30
    }
})