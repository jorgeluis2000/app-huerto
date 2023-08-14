import { StyleSheet } from "react-native"

export const colors = {
    primary: {
        100: "#cee9e7",
        200: "#9ed2cf",
        300: "#6dbcb7",
        400: "#3da59f",
        500: "#0c8f87",
        600: "#0a726c",
        700: "#075651",
        800: "#053936",
        900: "#021d1b"
    },
    red: {
        100: "#fcdada",
        200: "#f9b4b4",
        300: "#f58f8f",
        400: "#f26969",
        500: "#ef4444",
        600: "#bf3636",
        700: "#8f2929",
        800: "#601b1b",
        900: "#300e0e"
    },
    orange: {
        100: "#fee3d0",
        200: "#fdc7a2",
        300: "#fbab73",
        400: "#fa8f45",
        500: "#f97316",
        600: "#c75c12",
        700: "#95450d",
        800: "#642e09",
        900: "#321704"
    },
    yellow: {
        100: "#fbf0ce",
        200: "#f7e19c",
        300: "#f2d16b",
        400: "#eec239",
        500: "#eab308",
        600: "#bb8f06",
        700: "#8c6b05",
        800: "#5e4803",
        900: "#2f2402"
    },
    amber: {
        100: "#fdecce",
        200: "#fbd89d",
        300: "#f9c56d",
        400: "#f7b13c",
        500: "#f59e0b",
        600: "#c47e09",
        700: "#935f07",
        800: "#623f04",
        900: "#312002"
    },
    gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#27272a",
        800: "#3f3f46",
        900: "#111827"
    },
    /**
     * @default '#fff'
     */
    white: "#fff",
    black: "#000"
}

export const widthSizes = {
    /**
     * @default 0
     */
    "w-0": 0,
    /**
     * @default 2
     */
    "w-0.5": 2,
    /**
     * @default 1
     */
    "w-1": 1,
    /**
     * @default 6
     */
    "w-1.5": 6,
    /**
     * @default 8
     */
    "w-2": 8,
    /**
     * @default 10
     */
    "w-2.5": 10,
    /**
     * @default 12
     */
    "w-3": 12,
    /**
     * @default 14
     */
    "w-3.5": 14,
    /**
     * @default 16
     */
    "w-4": 16,
    /**
     * @default 20
     */
    "w-5": 20,
    /**
     * @default 24
     */
    "w-6": 24,
    /**
     * @default 28
     */
    "w-7": 28,
    /**
     * @default 32
     */
    "w-8": 32,
    /**
     * @default 36
     */
    "w-9": 36,
    /**
     * @default 40
     */
    "w-10": 40,
    /**
     * @default 44
     */
    "w-11": 44,
    /**
     * @default 48
     */
    "w-12": 48,
    /**
     * @default 56
     */
    "w-14": 56,
    /**
     * @default 64
     */
    "w-16": 64,
    /**
     * @default 80
     */
    "w-20": 80,
    /**
     * @default 96
     */
    "w-24": 96,
    /**
     * @default 112
     */
    "w-28": 112,
    /**
     * @default 128
     */
    "w-32": 128,
    /**
     * @default 144
     */
    "w-36": 144,
    /**
     * @default 160
     */
    "w-40": 160,
    /**
     * @default 176
     */
    "w-44": 176,
    /**
     * @default 192
     */
    "w-48": 192,
    /**
     * @default 208
     */
    "w-52": 208,
    /**
     * @default 224
     */
    "w-56": 224,
    /**
     * @default 240
     */
    "w-60": 240,
    /**
     * @default 256
     */
    "w-64": 256,
    /**
     * @default 288
     */
    "w-72": 288,
    /**
     * @default 320
     */
    "w-80": 320,
    /**
     * @default 384
     */
    "w-96": 384,
    /**
     * @default 'auto'
     */
    "w-auto": 'auto',
    /**
     * @default '50%'
     */
    "w-1/2": '50%',
    /**
     * @default '33.333333%'
     */
    "w-1/3": '33.333333%',
    /**
     * @default '66.666667%'
     */
    "w-2/3": '66.666667%',
    /**
     * @default '25%''
     */
    "w-1/4": '25%',
    /**
     * @default '75%''
     */
    "w-3/4": '75%',
    /**
     * @default '20%''
     */
    "w-1/5": '20%',
    /**
     * @default '100%''
     */
    "w-full": "100%"

}

export const fontFamily = {
    "sans": '',
    "serif": "",
    "mono": ""
}

export const fontSize = {
    xs: {
        "font-size": 12,
        "line-height": 16
    },
    sm: {
        "font-size": 14,
        "line-height": 20
    },
    base: {
        "font-size": 16,
        "line-height": 24
    },
    lg: {
        "font-size": 18,
        "line-height": 28
    },
    xl: {
        "font-size": 20,
        "line-height": 28
    },
    "2xl": {
        "font-size": 24,
        "line-height": 32
    },
    "3xl": {
        "font-size": 30,
        "line-height": 36
    },
    "4xl": {
        "font-size": 36,
        "line-height": 40
    },
    "5xl": {
        "font-size": 48,
        "line-height": 1
    },
    "6xl": {
        "font-size": 60,
        "line-height": 1
    },
    "7xl": {
        "font-size": 72,
        "line-height": 1
    },
    "8xl": {
        "font-size": 96,
        "line-height": 1
    },
    "9xl": {
        "font-size": 128,
        "line-height": 1
    }
}

interface IFontWightProps {
    "thin": "100"
    "extralight": "200",
    "light": "300",
    "normal": "400",
    "medium": "500",
    "semibold": "600",
    "bold": "700",
    "extrabold": "800",
    "black": "900"
}

export const fontWeight: IFontWightProps = {
    "thin": "100",
    "extralight": "200",
    "light": "300",
    "normal": "400",
    "medium": "500",
    "semibold": "600",
    "bold": "700",
    "extrabold": "800",
    "black": "900"
}


export const shadown = StyleSheet.create({
    "xs": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,

    },
    "sm": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    "base": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    "md": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    "lg": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    "xl": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    "2xl": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    "3xl": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    "4xl": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    "5xl": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    "6xl": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    "full": {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    "none": {
        shadowColor: "transparent",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    }

})

export const rounded = {
    "none": 0,
    "sm": 2,
    "rounded": 4,
    "md": 6,
    "lg": 8,
    "xl": 12,
    "2xl": 16,
    "3xl": 24,
    "full": 9999
}


export const border = {
    "0": 0,
    "2": 2,
    "4": 4,
    "8": 8,
    "border": 1
}