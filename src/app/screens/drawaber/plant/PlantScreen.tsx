import React, { useEffect, useLayoutEffect, useState } from "react";
import uniqid from 'uniqid';
import { DrawerNavigationOptions, DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, SafeAreaView, StyleSheet, Text, View, useColorScheme } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { colors, fontWeight, widthSizes } from "../../../../utils/constants/styles.constant";
import { IPlant } from "../../../../utils/interfaces/Plant";
import EmptyListComponent from "./components/EmptyList.component";
import ItemFlatListComponent from "./components/ItemFlatList.component";
import { getPlantsLibrary } from "../../../../utils/services/function-huerto";
import LoaderListComponent from "./components/LoaderList.component";
import { useToastStore } from "../../../../stores/Toast.store";
import BtnShadownComponent from "../../../../utils/components/btns/BtnShadown.component";

const { height } = Dimensions.get("screen")

interface IPlantScreenProps {
    navigation: DrawerNavigationProp<any> & DrawerNavigationHelpers & NativeStackNavigationProp<any>
}

export default function PlantScreen({ navigation }: IPlantScreenProps) {
    const colorSchema = useColorScheme()
    const navigator = useNavigation()
    const [plants, setPlants] = useState<IPlant[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const addToast = useToastStore(state => state.addToast)

    async function getPlants() {
        setLoading(true)
        const plantsLibrary = await getPlantsLibrary(currentPage, 10)
        if (plantsLibrary?.ok && plantsLibrary.data.length > 0) {
            setPlants(current => [...current, ...plantsLibrary.data])
        } else if (!plantsLibrary?.ok) {
            const uniqueID = uniqid()
            addToast({ id: uniqueID, message: plantsLibrary?.message, show: true, timeOut: 3700, title: "No hay resultados", typeToast: "error" })
        }
        setLoading(false)
    }
    function showMoreItems() {
        setCurrentPage(current => current + 1)
    }


    useEffect(() => {
        getPlants()
    }, [currentPage])

    useLayoutEffect(() => {
        const options: DrawerNavigationOptions = {
            title: "Biblioteca de cultivos",
            headerTransparent: true
        }
        navigator.setOptions(options)
    }, [])
    return (
        <SafeAreaView style={[styles["content"], (colorSchema === "light") ? styles["bg-light"] : styles["bg-dark"]]}>
            <View style={[{ height: widthSizes["w-28"] }]} />
            <View style={[{ paddingVertical: widthSizes["w-1"], flexDirection: "row", justifyContent: "center", columnGap: widthSizes["w-10"] }]}>
                <BtnShadownComponent style={[{ width: widthSizes["w-28"], justifyContent: "center" }]} eventPress={() => { }} >
                    <Text style={[styles["text-header-list"]]}>Agregar</Text>
                </BtnShadownComponent>
                <BtnShadownComponent style={[{ width: widthSizes["w-28"], justifyContent: "center" }]} eventPress={() => { }} >
                    <Text style={[styles["text-header-list"]]}>eliminar</Text>
                </BtnShadownComponent>
            </View>
            <FlashList
                contentContainerStyle={{ paddingTop: widthSizes["w-3"] }}
                data={plants}
                renderItem={({ item, index }) => (
                    <ItemFlatListComponent navigation={navigation} plant={item} index={index + 1} />
                )}
                keyExtractor={(item) => item._id}
                ListEmptyComponent={
                    <View style={[styles["content-empty"]]} >
                        <EmptyListComponent />
                    </View>
                }
                getItemType={(item) => {
                    return item._id
                }}
                ListFooterComponent={<LoaderListComponent loading={loading} />}
                onEndReached={showMoreItems}
                onEndReachedThreshold={0}
                estimatedItemSize={200}
            />
        </SafeAreaView>
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
    "content": {
        minHeight: height - 30
    },
    "content-empty": {
        alignItems: "center",
        justifyContent: "center",
        minHeight: height - 300
    },
    "text-header-list": {
        textAlign: "center",
        color: colors["white"],
        fontWeight: fontWeight["bold"]
    }
})