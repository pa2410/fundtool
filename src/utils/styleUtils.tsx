import { Dimensions,PixelRatio } from "react-native";

const {fontScale,width,height} = Dimensions.get("window");

export const screenWidth = width;
export const screenHeight = height;

// for responsive fontsize

export function fs(size: number) {
    return size / PixelRatio.roundToNearestPixel(fontScale)
}

// for responsive vertical scale
export const vs = (size: number) => height * (size / height)

// for responsive horizontal scale
export const hs = (size: number) => width * (size / width)
