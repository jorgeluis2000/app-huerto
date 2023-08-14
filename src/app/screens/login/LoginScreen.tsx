import { ReactNode, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from 'moti';
import uniqid from 'uniqid';
import { SvgXml } from "react-native-svg";
import { IStackScreenProps } from "../../../utils/interfaces/StackScreenProps";
import * as SecureStore from 'expo-secure-store';
import { colors, fontSize, fontWeight, widthSizes } from "../../../utils/constants/styles.constant";
import NavbarComponent from "../../../utils/components/Navbar.component";
import SpaceTopComponent from "../../../utils/components/SpaceTop.component";
import ViewSliceRightComponent from "../../../utils/components/ViewSliceRight.component";
import ViewSliceLeftComponent from "../../../utils/components/ViewSliceLeft.component";
import InputLabelFloatComponent from "../../../utils/components/inputs/InputLabelFloat.component";
import { LOGO_MAIN } from "../../../../assets/svgs/icons";
import NavbarRightComponent from "./components/NavbarRight.component";
import InputLabelFloatPasswordComponent from "../../../utils/components/inputs/InputLabelFloatPassword.component";
import { LineDivideOCompoent } from "../../../utils/components/LineDiveO.component";
import BtnShadownComponent from "../../../utils/components/btns/BtnShadown.component";
import SplashComponent from "./components/Splash.component";
import { useSplashStore } from "../../../stores/Splash.store";
import { useToastStore } from "../../../stores/Toast.store";
import { ToastProps } from "../../../utils/interfaces/ToastProp";
import { loggedInHuerto } from "../../../utils/services/function-huerto";
import { useLoggInStore } from "../../../stores/LoggIn.store";
import { KEY_NICK, KEY_TOKEN } from "../../../utils/constants/storages.constant";


interface ILoginProps {
    children?: ReactNode
}

export default function LoginScreen({ navigation, route }: IStackScreenProps & ILoginProps) {
    const colorSchema = useColorScheme()
    const loggIn = useLoggInStore(state => state.loggIn)
    const updateLoggIn = useLoggInStore(state => state.updateLoggIn)
    const addToast = useToastStore(state => state.addToast)
    const updateToast = useToastStore(state => state.updateToast)
    const active = useSplashStore((state) => state.active)
    const changeActive = useSplashStore((state) => state.changeActive)
    const [nickValue, setNickValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    async function handdlerPressLogin() {
        const uniqueID = uniqid()
        const toastCreated = addToast({ id: uniqueID, message: "Espera estamos validando tus datos...", title: "", show: true, typeToast: "load" , timeOut: 0})
        const response = await loggedInHuerto(nickValue, passwordValue)
        let changeToast: ToastProps = {}
        if (response?.ok) {
            changeToast =  { timeOut: 2500, title: "Autenticado", message: response?.message, typeToast: "success"}
        } else {
            changeToast =  { timeOut: 2500, title: "Error en los datos", message: response?.message, typeToast: "error"}
        }
        const toastMix = Object.assign({...toastCreated}, changeToast)
        updateToast(toastCreated.id, toastMix)
        if (response?.ok && response?.data) {
            updateLoggIn({ token: response.data, nick: nickValue })
            await SecureStore.setItemAsync(KEY_TOKEN, response.data)
            await SecureStore.setItemAsync(KEY_NICK, response.data)
            navigation.replace("Drawaber")
        }
    }

    function verifySession() {
        if (loggIn.nick !== "" && loggIn.token !== "") {
            navigation.replace("Drawaber")
        }
    }

    function handdlerPressRegister() {
        navigation.push("Register")
    }
    useEffect(() => {
        if (active) {
            setTimeout(() => changeActive(), 2800)
        }
        verifySession()
    }, [])

    return (
        <ScrollView style={[(colorSchema === "light") ? styles["container-bg-light"] : styles["container-bg-dark"]]}>
            {
                (!active) ?
                    <SafeAreaView style={[styles["container-login"]]}>
                        <SpaceTopComponent />
                        <NavbarComponent title="Login" colorTitle={(colorSchema === "light") ? colors.primary[600] : colors.white} rightComponent={<NavbarRightComponent />} />
                        <View style={{ marginVertical: widthSizes["w-auto"], marginHorizontal: widthSizes["w-10"] }}>
                            {/* Entrada */}
                            <ViewSliceLeftComponent style={{ alignItems: "center", marginBottom: widthSizes["w-12"], marginTop: widthSizes["w-12"] }}>
                                <SvgXml xml={LOGO_MAIN} style={{ width: widthSizes["w-28"], height: widthSizes["w-28"] }} />
                            </ViewSliceLeftComponent>
                            <ViewSliceLeftComponent>
                                <Text style={[styles["style-text-welcome"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>¡Bienvenido a TuHuerto!</Text>
                            </ViewSliceLeftComponent>
                            {/* Inputs */}
                            <ViewSliceRightComponent style={{ marginBottom: widthSizes["w-10"] }}>
                                <InputLabelFloatComponent valueText={nickValue} setValueText={setNickValue} id="nick-login" name="Nick" />
                            </ViewSliceRightComponent>

                            <ViewSliceLeftComponent style={{ marginBottom: widthSizes["w-10"] }}>
                                <InputLabelFloatPasswordComponent valuePassword={passwordValue} setValuePassword={setPasswordValue} id="password-login" name="Password" />
                            </ViewSliceLeftComponent>
                            {/* Botones */}
                            <ViewSliceLeftComponent style={{ marginBottom: widthSizes["w-6"] }}>
                                    <BtnShadownComponent eventPress={handdlerPressLogin}>
                                        <Text style={[{ textAlign: "center", color: colors.white, fontWeight: fontWeight["bold"] }]} >Iniciar seccion</Text>
                                    </BtnShadownComponent>
                            </ViewSliceLeftComponent>

                            <ViewSliceLeftComponent style={{ marginBottom: widthSizes["w-6"] }}>
                                <LineDivideOCompoent />
                            </ViewSliceLeftComponent>

                            <ViewSliceLeftComponent style={{ marginBottom: widthSizes["w-2"] }}>
                                    <BtnShadownComponent eventPress={handdlerPressRegister}>
                                        <Text style={[{ textAlign: "center", color: colors.white, fontWeight: fontWeight["bold"] }]} >Registrarse</Text>
                                    </BtnShadownComponent>
                            </ViewSliceLeftComponent>
                        </View>
                    </SafeAreaView>
                    :
                    <SplashComponent />
            }

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
    "container-login": {
        display: "flex",
        width: widthSizes["w-full"]
    },
    "style-text-welcome": {
        fontSize: fontSize["xl"]["font-size"],
        lineHeight: fontSize["xl"]["line-height"],
        fontWeight: fontWeight["bold"],
        marginBottom: widthSizes["w-20"],
        textAlign: "center"
    },
    "text-light": {
        color: colors.black
    },
    "text-dark": {
        color: colors.white
    }
})