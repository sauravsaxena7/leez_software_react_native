import { Dimensions } from "react-native";

const {width:deviceWidth,height:deviceHeight} = Dimensions.get('window');

export const hp = pecentage=>{
    return (pecentage*deviceHeight)/100;
}

export const wp = percentage=>{
    return (percentage*deviceWidth)/100;
}