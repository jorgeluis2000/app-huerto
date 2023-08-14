import React, { ReactNode } from "react"
import { Pressable, StyleSheet, Text, View, useColorScheme } from "react-native"
import { colors, fontSize, fontWeight, shadown, widthSizes } from "../../../../../utils/constants/styles.constant"
import ViewSliceLeftComponent from "../../../../../utils/components/ViewSliceLeft.component"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types"
import { IPlant } from "../../../../../utils/interfaces/Plant"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import BtnBackgroundComponent from "../../../../../utils/components/btns/BtnBackground.component"

interface IItemFlatListProps {
    children?: ReactNode
    navigation: DrawerNavigationProp<any> & DrawerNavigationHelpers & NativeStackNavigationProp<any>
    plant: IPlant
    index: number
}

export default function ItemFlatListComponent({ navigation, plant, index }: IItemFlatListProps) {
    const colorScheme = useColorScheme()
    const lastUpdate = new Date(plant.updatedAt)
    
    return (
        <ViewSliceLeftComponent style={[styles["content-items"], shadown.lg, (colorScheme === "light") ? styles["bg-light"] : styles["bg-dark"]]} transition={{ type: "timing", duration: (index * 350) }}>
            <Pressable onLongPress={() => {}}>
                <View style={[styles["content-title"]]}>
                    <Text style={[styles["text-title"], (colorScheme === "light") ? styles["text-light"] : styles["text-dark"]]}>{plant.name_plant}</Text>
                </View>
                <View style={[styles["content-description"]]}>
                    <Text style={[styles["text-description"], (colorScheme === "light") ? styles["text-light"] : styles["text-dark"]]}>{plant.description}</Text>
                </View>
                <View style={[styles["content-footer"]]}>
                    <Text style={[styles["text-type-fruit"], (colorScheme === "light") ? styles["text-light"] : styles["text-dark"]]}>Fruta: {plant.type_fruit}</Text>
                    <Text style={[styles["text-size"], (colorScheme === "light") ? styles["text-light"] : styles["text-dark"]]}>Tamaño: {plant.height}</Text>
                </View>
                <Text style={[styles["content-date"], (colorScheme === "light") ? styles["text-light"] : styles["text-dark"]]}>Ultima actualización: {lastUpdate.toLocaleString()}</Text>
                <BtnBackgroundComponent style={[styles.btn]} eventPress={() => { }}>
                    <Text style={[styles["btn-text"]]}>Ver más...</Text>
                </BtnBackgroundComponent>
            </Pressable>
        </ViewSliceLeftComponent>
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
        color: colors["black"]
    },
    "text-dark": {
        color: colors["white"]
    },
    "content-items": {
        paddingHorizontal: widthSizes["w-5"],
        paddingVertical: widthSizes["w-5"]
    },
    "content-title": {
    },
    "content-description": {
        marginTop: widthSizes["w-3"]
    },
    "content-footer": {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: widthSizes["w-3"]
    },
    "content-date": {
        textAlign: "right",
        width: widthSizes["w-full"],
        fontSize: fontSize["xs"]["font-size"],
        lineHeight: fontSize["xs"]["line-height"],
        fontWeight: fontWeight["medium"],
        marginTop: widthSizes["w-3"]
    },
    "text-title": {
        fontSize: fontSize["lg"]["font-size"],
        lineHeight: fontSize["lg"]["line-height"],
        fontWeight: fontWeight["bold"]
    },
    "text-description": {
        fontSize: fontSize["sm"]["font-size"],
        lineHeight: fontSize["sm"]["line-height"],
        textAlign: "justify",
        fontWeight: fontWeight["normal"]
    },
    "text-type-fruit": {
        fontSize: fontSize["sm"]["font-size"],
        lineHeight: fontSize["sm"]["line-height"],
        fontWeight: fontWeight["medium"]
    },
    "text-size": {
        fontSize: fontSize["sm"]["font-size"],
        lineHeight: fontSize["sm"]["line-height"],
        fontWeight: fontWeight["medium"]
    },
    "btn-text": {
        fontSize: fontSize["sm"]["font-size"],
        lineHeight: fontSize["sm"]["line-height"],
        fontWeight: fontWeight["bold"],
        textAlign: "center",
        color: colors["primary"]["500"]
    },
    "btn": {
        marginTop: widthSizes["w-3"],
        alignSelf: "center",
        width: widthSizes["w-28"]
    }
})