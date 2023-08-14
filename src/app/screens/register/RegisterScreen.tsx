import React, { ReactNode, useState } from "react";
import { View } from "moti";
import uniqid from 'uniqid';
import { SvgXml } from "react-native-svg";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme } from "react-native";
import { IStackScreenProps } from "../../../utils/interfaces/StackScreenProps";
import SpaceTopComponent from "../../../utils/components/SpaceTop.component";
import NavbarComponent from "../../../utils/components/Navbar.component";
import { colors, fontSize, fontWeight, widthSizes } from "../../../utils/constants/styles.constant";
import ViewSliceLeftComponent from "../../../utils/components/ViewSliceLeft.component";
import { LOGO_PLANET } from "../../../../assets/svgs/icons";
import ViewSliceRightComponent from "../../../utils/components/ViewSliceRight.component";
import ViewOpacityComponent from "../../../utils/components/ViewOpacity.component";
import InputLabelFloatComponent from "../../../utils/components/inputs/InputLabelFloat.component";
import InputLabelFloatPasswordComponent from "../../../utils/components/inputs/InputLabelFloatPassword.component";
import BtnShadownComponent from "../../../utils/components/btns/BtnShadown.component";
import { useToastStore } from "../../../stores/Toast.store";
import { registerUser } from "../../../utils/services/function-huerto";
import { ToastProps } from "../../../utils/interfaces/ToastProp";
import NavbarLeftComponent from "./components/Navbarleft.component";


interface IRegisterProps {
    children?: ReactNode
}

const { height } = Dimensions.get("window")

export default function RegisterScreen({ navigation, route }: IStackScreenProps & IRegisterProps) {
    const colorSchema = useColorScheme()
    const addToast = useToastStore(state => state.addToast)
    const updateToast = useToastStore(state => state.updateToast)
    const [nickValue, setNickValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("")

    async function handdlerPressRegister() {
        const uniqueID = uniqid()
        const toastCreated = addToast({ id: uniqueID, message: "Espera estamos validando tus datos...", title: "", show: true, typeToast: "load" , timeOut: 0})
        const response = await registerUser(nickValue, passwordValue, confirmPasswordValue)
        let changeToast: ToastProps = {}
        if (response?.ok) {
            changeToast =  { timeOut: 2500, title: "Registrado", message: response?.message, typeToast: "success"}
        } else {
            changeToast =  { timeOut: 2500, title: "Error en los datos", message: response?.message, typeToast: "error"}
        }
        const toastMix = Object.assign({...toastCreated}, changeToast)
        updateToast(toastCreated.id, toastMix)
        if(response?.ok) navigation.replace("Login")
    }

    return (
        <ScrollView>
            <SafeAreaView style={[(colorSchema === "light") ? styles["container-bg-light"] : styles["container-bg-dark"]]}>
                <SpaceTopComponent />
                <ViewOpacityComponent>
                    <NavbarComponent title="Register" marginTitle="w-3" colorTitle={(colorSchema === "light") ? colors.primary[600] : colors.white} leftComponent={<NavbarLeftComponent navigation={navigation} />} />
                </ViewOpacityComponent>
                <View style={{ minHeight: height - 64 }}>
                    <ViewSliceLeftComponent style={[styles["content-icon-planet"]]}>
                        <SvgXml xml={LOGO_PLANET} style={[styles["style-icon-planet"]]} />
                    </ViewSliceLeftComponent>
                    <ViewSliceRightComponent style={{ marginHorizontal: widthSizes["w-10"] }}>
                        <Text style={[styles["text-title"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>¡Registrate Ahora!</Text>
                        <Text style={[styles["text-description"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>Al registrarte con nosotros podras administrar tu propio <Text style={[styles["text-mark"], (colorSchema === "light") ? styles["text-light-compose"] : styles["text-dark-compose"]]}>Huerto</Text>.</Text>
                    </ViewSliceRightComponent>
                    <ViewSliceLeftComponent style={[styles["margin-inputs"]]}>
                        <InputLabelFloatComponent valueText={nickValue} setValueText={setNickValue} id="nick-register" name="Nick" />
                    </ViewSliceLeftComponent>
                    <ViewSliceRightComponent style={[styles["margin-inputs"]]}>
                        <InputLabelFloatPasswordComponent valuePassword={passwordValue} setValuePassword={setPasswordValue} id="password-register" name="Contraseña" />
                    </ViewSliceRightComponent>
                    <ViewSliceLeftComponent style={[styles["margin-inputs"]]}>
                        <InputLabelFloatPasswordComponent valuePassword={confirmPasswordValue} setValuePassword={setConfirmPasswordValue} id="confirm-password-register" name="Confirmar contraseña" />
                    </ViewSliceLeftComponent>
                    <ViewSliceRightComponent style={{marginHorizontal: widthSizes["w-10"], marginTop: widthSizes["w-10"]}}>
                        <BtnShadownComponent eventPress={handdlerPressRegister}>
                            <Text style={[{ textAlign: "center", color: colors.white, fontWeight: fontWeight["bold"] }]} >Registrarse</Text>
                        </BtnShadownComponent>
                    </ViewSliceRightComponent>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    "container-bg-light": {
        backgroundColor: colors.white
    },
    "container-bg-dark": {
        backgroundColor: colors.gray[900]
    },
    "text-light-compose": {
        color: colors["primary"]["600"]
    },
    "text-dark-compose": {
        color: colors["primary"]["300"]
    },
    "text-light": {
        color: colors["black"]
    },
    "text-dark": {
        color: colors["white"]
    },
    "text-title": {
        fontSize: fontSize["xl"]["font-size"],
        lineHeight: fontSize["xl"]["line-height"],
        fontWeight: fontWeight["bold"],
        marginBottom: widthSizes["w-2"]
    },
    "text-description": {
        fontSize: fontSize["base"]["font-size"],
        lineHeight: fontSize["base"]["line-height"],
        fontWeight: fontWeight["light"],
        textAlign: "justify",
        marginBottom: widthSizes["w-10"]
    },
    "text-mark": {
        fontWeight: fontWeight["semibold"],
    },
    "content-icon-planet": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: widthSizes["w-16"],
        marginTop: widthSizes["w-8"],
    },
    "style-icon-planet": {
        width: widthSizes["w-20"],
        height: widthSizes["w-20"]
    },
    "margin-inputs": {
        marginHorizontal: widthSizes["w-10"],
        marginBottom: widthSizes["w-5"]
    }
})