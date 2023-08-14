import { useState } from "react";
import { StyleSheet, Text, Pressable, View, GestureResponderEvent, useColorScheme } from "react-native";
import { IStackScreenProps } from "../../utils/interfaces/StackScreenProps";
import { colors } from "../../utils/constants/styles.constant";
import BtnShadownComponent from "../../utils/components/btns/BtnShadown.component";

export default function HomeScreen({ navigation, route }: IStackScreenProps) {
    const colorSchema = useColorScheme()

    function handdlerPress() {
        setTimeout(() => navigation.push("Login", { first: "algo" }), 20)
    }

    return (
        <View style={[styles.container, (colorSchema === "light") ? styles["container-bg-light"] : styles["container-bg-dark"]]}>
            <Text style={(colorSchema === "dark") ? styles["text-white"] : {}}>Open up App.tsx to start working on your app!</Text>
            <BtnShadownComponent eventPress={handdlerPress} >
                <Text style={[styles["text-white"]]} >Iniciar seccion</Text>
            </BtnShadownComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    "container-bg-light": {
        backgroundColor: colors.white,
    },
    "container-bg-dark": {
        backgroundColor: colors.gray[800],
    },
    "text-white": {
        color: colors.white
    }
});
