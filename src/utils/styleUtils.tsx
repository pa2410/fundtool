import { Dimensions, PixelRatio } from "react-native";

const { width, height, fontScale } = Dimensions.get("window");

export const screenWidth = width;
export const screenHeight = height;

// Define breakpoints for tablet and mobile
const TABLET_BREAKPOINT = 768;

// Check if the device is a tablet
const isTablet = width >= TABLET_BREAKPOINT;

// Define scaling factors for mobile and tablet
const SCALE_FACTOR_MOBILE = 1;
const SCALE_FACTOR_TABLET = 1.5;

// Select the appropriate scale factor based on the device
const SCALE_FACTOR = isTablet ? SCALE_FACTOR_TABLET : SCALE_FACTOR_MOBILE;

// for responsive fontsize
export function fs(size: number) {
    return size / PixelRatio.roundToNearestPixel(fontScale) * SCALE_FACTOR;
}

// for responsive vertical scale
export const vs = (size: number) => height * (size / height) * SCALE_FACTOR;

// for responsive horizontal scale
export const hs = (size: number) => width * (size / width) * SCALE_FACTOR;