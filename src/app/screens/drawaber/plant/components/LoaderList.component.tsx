import React from "react";
import { ActivityIndicator, StyleSheet, Text, useColorScheme } from "react-native";
import ViewExpandVerticalComponent from "../../../../../utils/components/ViewExpandVertical.component";
import { colors } from "../../../../../utils/constants/styles.constant";

interface ILoaderListProps {
    loading: boolean
}

export default function LoaderListComponent({ loading }: ILoaderListProps) {
    const colorScheme = useColorScheme()
    return (
        (loading) ?
            <ViewExpandVerticalComponent style={[styles.content]}>
                <ActivityIndicator size="large" color={(colorScheme === "light") ? colors["gray"]["300"] : colors["gray"]["600"]} />
            </ViewExpandVerticalComponent> : null
    )
}

const styles = StyleSheet.create({
    "content": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})