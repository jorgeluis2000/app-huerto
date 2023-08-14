import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewOpacityComponent from "./ViewOpacity.component";
import { colors, fontSize, fontWeight, widthSizes } from "../constants/styles.constant";


interface INavbraProps {
    children?: ReactNode
    rightComponent?: JSX.Element,
    leftComponent?: JSX.Element,
    title?: string
    backGroundColor?: string
    colorTitle?: string
    marginTitle?: "w-10" | "w-0" | "w-0.5" | "w-1" | "w-1.5" | "w-2" | "w-2.5" | "w-3" | "w-3.5" | "w-4" | "w-5" | "w-6" | "w-7" | "w-8" | "w-9" | "w-10" | "w-11" | "w-12" | "w-14" | "w-16"
}


export default function NavbarComponent({ rightComponent, leftComponent, title, colorTitle, marginTitle, backGroundColor }: INavbraProps) {

    return (
        <ViewOpacityComponent style={[styles["navbar-container"], (backGroundColor !== undefined) ? { backgroundColor: backGroundColor } : {} ]} >
            <View style={[styles["left-side"]]}>
                {
                    (leftComponent !== undefined) ? leftComponent :
                        ""
                }
                {
                    (title === "" || title === undefined) ?
                        "" :
                        <View style={[styles["content-text-title"], (marginTitle) ? { marginLeft: widthSizes[marginTitle] } : {}]}>
                            <Text style={[styles["style-text-title"], { color: (colorTitle) ? colorTitle : colors.black }]}>{title}</Text>
                        </View>
                }
            </View>
            <View style={[styles["right-side"]]}>
                {
                    (rightComponent !== undefined) ? rightComponent : ""
                }
            </View>
        </ViewOpacityComponent>
    )
}


const styles = StyleSheet.create({
    "navbar-container": {
        flexDirection: "row",
        alignItems: "center",
        width: widthSizes["w-full"],
        height: widthSizes["w-16"]
    },
    "left-side": {
        flexDirection: "row",
        alignItems: "center",
        height: widthSizes["w-full"],
        width: widthSizes["w-1/2"]
    },
    "content-text-title": {
        alignItems: "center",
        width: widthSizes["w-1/2"]
    },
    "style-text-title": {
        fontSize: fontSize.xl["font-size"],
        lineHeight: fontSize.xl["font-size"],
        fontWeight: fontWeight.bold
    },
    "right-side": {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: widthSizes["w-full"],
        width: widthSizes["w-1/2"]
    }
})