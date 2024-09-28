import { Dimensions } from "react-native"
const {height,width} =Dimensions.get('window');

export const Theme={
    color:{
        primary:"#236C85",
        secondary:"#ECF2F4",
        ternary:'#3E3E3E',

        darkLight:"#E1E1E1",

        gray:"#E3E3E3",
        gray2:"#C1C0CB",

        TabBarText:"#236C85",
        SimpleText:"#252B5C",

        text:"#494949",
        textLight:"#7C7C7C",
        textDark:"#1D1D1D",
        fadeTextColor:"#A1A5C1",

        rose:"#EF4444",
        roseLight:"#f87171",

    },

    sizes:{
        xSmall:10,
        small:12,
        medium:16,
        large:20,
        xLarge:24,
        xxLarge:44,
        height,
        width
    },

    fonts:{
        medium:"500",
        semiBold:'600',
        bold:'700',
        extraBold:'700',
        height,
        width
    },

    radius:{
        xs:10,
        sm:12,
        md:14,
        lg:16,
        xl:18,
        xxl:22,
    },

    shadows:{
        small:{
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:2,
            },
            shadowOpacity:0.25,
            shadowRadius:3.84,
            elevation:2,
        },
        medium:{
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:2,
            },
            shadowOpacity:0.25,
            shadowRadius:5.84,
            elevation:5,
        }
    }
}