import React, { ReactNode, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, View, useColorScheme, Text, Dimensions, TouchableOpacity } from "react-native";
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { colors, fontSize, fontWeight, rounded, widthSizes } from "../../../../utils/constants/styles.constant";
import { EDIT_ICON, FARMER_ICON } from "../../../../../assets/svgs/icons";
import { useLoggInStore } from "../../../../stores/LoggIn.store";
import BtnDrawaberComponent from "./BtnDrawaber.component";
import BtnShadownComponent from "../../../../utils/components/btns/BtnShadown.component";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { KEY_NICK, KEY_TOKEN } from "../../../../utils/constants/storages.constant";

interface IDrawerProps {
    children?: ReactNode
    navigationStack?: NativeStackNavigationProp<any>
}
const { height } = Dimensions.get("window")

export default function DrawaberComponent({ navigation, state, navigationStack }: IDrawerProps & DrawerContentComponentProps) {
    const colorSchema = useColorScheme()
    const loggIn = useLoggInStore(state => state.loggIn)
    const resetLoggIn = useLoggInStore(state => state.resetLoggIn)

    async function closeSession() {
        SecureStore.deleteItemAsync(KEY_TOKEN)
        SecureStore.deleteItemAsync(KEY_NICK)
        resetLoggIn()
        navigationStack?.replace("Login")
    }

    useEffect(() => {
        if (loggIn.nick === "" && loggIn.token === "") {
            navigationStack?.replace("Login")
        }
    }, [])

    return (
        <DrawerContentScrollView style={[(colorSchema === "light") ? styles["bg-light"] : styles["bg-dark"]]}>
            <View style={[styles["content-header"]]}>
                <View>
                    <View style={[styles["content-profile"]]}>
                        <SvgXml xml={FARMER_ICON} style={[styles["icon-profile"]]} />
                    </View>
                    <TouchableOpacity style={[styles["content-icon-edit"], { backgroundColor: (colorSchema === 'dark') ? colors["gray"]["800"] : colors["gray"]["100"] }]}>
                        <SvgXml xml={EDIT_ICON} style={[styles["icon-edit"]]} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles["text-name-profile"], { backgroundColor: (colorSchema === 'dark') ? colors["gray"]["800"] : colors["gray"]["100"] }]}>{loggIn.nick}</Text>
            </View>
            <View style={[styles["content-links"]]}>
                {
                    state.routes.map(({ key, name }, index) => (
                        <BtnDrawaberComponent key={key} name={name} stateIndex={index} state={state.index} navigation={navigation} text={(name === "Plants") ? "Plantas" : name} />
                    ))
                }
            </View>
            <View>
                <BtnShadownComponent style={[{ marginHorizontal: widthSizes["w-5"] }]} eventPress={closeSession}>
                    <Text style={{ color: colors.white, textAlign: "center" }}>Log Out</Text>
                </BtnShadownComponent>
            </View>
        </DrawerContentScrollView>
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
        color: colors.black
    },
    "text-dark": {
        color: colors.white
    },
    "text-light-compose": {

    },
    "text-dark-compose": {

    },
    "content-header": {
        alignItems: "center"
    },
    "content-profile": {
        borderRadius: rounded["full"],
        overflow: "hidden",
        backgroundColor: colors["primary"]["200"]
    },
    "icon-profile": {
        width: widthSizes["w-20"],
        height: widthSizes["w-20"]
    },
    "icon-edit": {
        color: colors["primary"]["500"],
        width: widthSizes["w-4"],
        height: widthSizes["w-4"]
    },
    "content-icon-edit": {
        position: "absolute",
        zIndex: 2,
        padding: widthSizes["w-2"],
        borderRadius: rounded["full"],
        right: -8,
        top: -5
    },
    "text-name-profile": {
        fontSize: fontSize["sm"]["font-size"],
        lineHeight: fontSize["sm"]["line-height"],
        margin: widthSizes["w-2"],
        marginTop: widthSizes["w-5"],
        color: colors["primary"]["500"],
        fontWeight: fontWeight["bold"],
        borderRadius: rounded["lg"],
        paddingHorizontal: widthSizes["w-3"],
        paddingVertical: widthSizes["w-1"],
        textTransform: "capitalize",
        zIndex: 30
    },
    "content-links": {
        minHeight: height - 300,
        marginTop: widthSizes["w-8"],
        overflow: "hidden"
    }
})