import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps, TextStyle, ViewStyle, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    leftCustomView?: any;
    leftIcon?: ImageSourcePropType;
    rightIcon?: ImageSourcePropType;
    onLeftIconPress?: () => void;
    onRightIconPress?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    containerStyle,
    inputStyle,
    leftCustomView,
    leftIcon,
    rightIcon,
    onLeftIconPress,
    onRightIconPress,
    ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {leftIcon && (
                <TouchableOpacity onPress={onLeftIconPress}>
                    <Image source={leftIcon} style={styles.icon} />
                </TouchableOpacity>
            )}
            {leftCustomView && leftCustomView(
                
            )}
            <TextInput
                style={[styles.input, inputStyle]}
                placeholderTextColor="#999"
                {...props}
            />
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    <Image source={rightIcon} style={styles.icon} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 16,
        elevation: 5,
        backgroundColor: 'white'
    },
    input: {
        flex: 1,
        height: 56,
        fontSize: 16,
    },
    icon: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
});

export default CustomTextInput;