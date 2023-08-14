import { ReactNode, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { IToastProps } from "../../interfaces/ToastProp";
import { border, colors, fontSize, fontWeight, rounded, shadown, widthSizes } from "../../constants/styles.constant";
import { SvgXml } from "react-native-svg";
import { ERROR_ICON, EXIT_EX_ICON, FARMER_ICON, RING_RESIZE_ANIMATION_ICON, SUCCESS_ICON } from "../../../../assets/svgs/icons";
import ViewEffectComponent from "./ViewEffect.component";
import { useToastStore } from "../../../stores/Toast.store";

interface IToastComponentPorps {
    children?: ReactNode
    toast: IToastProps
    iconClose?: boolean
    animation?: "sliceTop" | "opacity" | "sliceBottom" | "pop" | "sliceRight" | "sliceLeft"
}

export default function ToastComponent({ toast, iconClose, animation }: IToastComponentPorps) {
    const colorSchema = useColorScheme()
    const removeToast = useToastStore(state => state.removeToast)
    const updateToast = useToastStore(state => state.updateToast)
    let typeIcon = useRef(FARMER_ICON)
    const [showToast, setShowToast] = useState(toast.show)


    if (toast.typeToast === "error") {
        typeIcon.current = ERROR_ICON
    } else if (toast.typeToast === "load") {
        typeIcon.current = RING_RESIZE_ANIMATION_ICON
    } else if (toast.typeToast === "success") {
        typeIcon.current = SUCCESS_ICON
    } else if (toast.typeToast === "warning") {
        typeIcon.current = FARMER_ICON
    }

    function handdlerCloseToast() {
        toast.show = false
        setShowToast(toast.show)
        setTimeout(() => removeToast(toast.id), 550)
    }

    useEffect(()=> {
        if (toast.typeToast === "error") {
            typeIcon.current = ERROR_ICON
        } else if (toast.typeToast === "load") {
            typeIcon.current = RING_RESIZE_ANIMATION_ICON
        } else if (toast.typeToast === "success") {
            typeIcon.current = SUCCESS_ICON
        } else if (toast.typeToast === "warning") {
            typeIcon.current = FARMER_ICON
        }
    }, [toast.typeToast])


    useEffect(() => {
        if (toast.timeOut > 0) {
            setTimeout(() => {
                toast.show = false
                setShowToast(toast.show)
            }, toast.timeOut)

            setTimeout(() => removeToast(toast.id), toast.timeOut + 300)
        }
    }, [toast.timeOut])

    return (
        <ViewEffectComponent transition={{ type: "spring" }} show={showToast} animation="opacity" style={[styles["content"], shadown.lg, (colorSchema === "light") ? styles["content-light"] : styles["content-dark"]]}>
            {
                (iconClose) ?
                    <TouchableOpacity style={[styles["content-close"]]} onPress={() => handdlerCloseToast()}>
                        <SvgXml xml={EXIT_EX_ICON} style={[styles["ex-close"], (colorSchema === "light") ? styles["close-light"] : styles["close-dark"]]} />
                    </TouchableOpacity>
                    :
                    ""
            }
            <View style={[styles["content-toast"]]}>
                <View style={[styles["content-icon"]]}>
                    <View style={[styles["container-icon"]]}>
                        <SvgXml xml={typeIcon.current} style={[styles["icon-response"]]} />
                    </View>
                </View>
                <View>
                    {
                        (toast?.title && toast?.title !== "") ?
                            <Text style={[styles["text-title"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>{toast.title}</Text>
                            :
                            ""
                    }
                    <Text style={[styles["text-info"], (colorSchema === "light") ? styles["text-light"] : styles["text-dark"]]}>{toast.message}</Text>
                </View>
            </View>
        </ViewEffectComponent>
    )
}


const styles = StyleSheet.create({
    "content": {
        borderRadius: rounded["md"],
        width: "95%",
        marginBottom: 10,
        padding: widthSizes["w-1"]
    },
    "content-light": {
        backgroundColor: colors["white"]
    },
    "content-dark": {
        backgroundColor: colors["gray"]["900"],
        borderWidth: border["border"],
        borderColor: colors["gray"]["800"]
    },
    "content-close": {
        width: widthSizes["w-full"],
        paddingRight: widthSizes["w-2.5"],
        paddingTop: widthSizes["w-2.5"],
        alignItems: "flex-end",
    },
    "ex-close": {
        width: widthSizes["w-5"],
        height: widthSizes["w-5"]
    },
    "close-light": {
        color: colors["black"]
    },
    "close-dark": {
        color: colors["white"]
    },
    "content-toast": {
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        paddingLeft: widthSizes["w-4"], paddingBottom: widthSizes["w-4"]
    },
    "content-icon": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    "text-title": {
        fontSize: fontSize["xl"]["font-size"],
        lineHeight: fontSize["xl"]["line-height"],
        fontWeight: fontWeight["bold"]
    },
    "text-info": {
        width: "80%",
        overflow: "hidden",
        fontSize: fontSize["xs"]["font-size"],
        lineHeight: fontSize["xs"]["line-height"],
    },
    "text-light": {
        color: colors["black"]
    },
    "text-dark": {
        color: colors["white"]
    },
    "container-icon": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: widthSizes["w-2"],
        padding: widthSizes["w-2"],
        marginRight: widthSizes["w-2"],
        height: widthSizes["w-11"],
        backgroundColor: colors["primary"]["600"]
    },
    "icon-response": {
        width: widthSizes["w-6"],
        height: widthSizes["w-6"],
        color: colors["white"]
    }
})