import { TouchableOpacity } from "react-native-gesture-handler"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import { colors, fontWeight, rounded, shadown, widthSizes } from "../../../../utils/constants/styles.constant"
import { StyleSheet, Text, useColorScheme } from "react-native"
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types"

interface IBtnDrawaberProps {
    text: string
    name: string
    navigation: DrawerNavigationProp<any> | DrawerNavigationHelpers
    stateIndex: number
    state: number
}
export default function BtnDrawaberComponent({ navigation, name, text, stateIndex, state }: IBtnDrawaberProps) {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity style={[styles.btn, (state === stateIndex) ? [styles.active, shadown["sm"]] : {}]} onPress={() => navigation.jumpTo(name)}>
            <Text style={[styles["text"], (colorScheme === "dark") ? styles["text-dark"] : {}, (state === stateIndex) ? styles["text-active"] : {}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    "btn": {
        borderRadius: rounded["md"],
        paddingVertical: widthSizes["w-4"],
        marginHorizontal: widthSizes["w-3"],
        marginBottom: widthSizes["w-3"],
    },
    "active": {
        backgroundColor: colors["primary"]["500"],
    },
    "text": {
        textAlign: "center",
        fontWeight: fontWeight["semibold"]
    },
    "text-dark": {
        color: colors.white
    },
    "text-active": {
        color: colors.white,
        fontWeight: fontWeight["bold"]

    }
})