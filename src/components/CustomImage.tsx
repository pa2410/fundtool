import React from 'react';
import { Image, ImageStyle, StyleSheet, ImageProps, ImageSourcePropType, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface CustomImageProps extends ImageProps {
    style?: ImageStyle;
    source: ImageSourcePropType;
    onPress?: (event: GestureResponderEvent) => void;
}

const CustomImage: React.FC<CustomImageProps> = ({ style, source, onPress, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={[styles.image, style]} source={source} {...props} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});

export default CustomImage;