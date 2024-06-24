import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TextInputProps, TextStyle, ViewStyle, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import images from '../utils/images';
import { fs, hs, vs } from '../utils/styleUtils';

interface CustomTextInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    leftCustomView?: any;
    leftIcon?: ImageSourcePropType;
    rightIcon?: ImageSourcePropType;
    showEye?: boolean;
    onLeftIconPress?: () => void;
    onRightIconPress?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    containerStyle,
    inputStyle,
    leftCustomView,
    leftIcon,
    rightIcon,
    showEye,
    onLeftIconPress,
    onRightIconPress,
    ...props
}) => {

    const [eye, setEye] = useState<boolean>(false);

    const onIconPress = () => {
        setEye(!eye);
    }

    return (
        <View style={[styles.container, containerStyle]}>
            {leftIcon && (
                <TouchableOpacity onPress={onLeftIconPress}>
                    <Image source={leftIcon} style={styles.icon} />
                </TouchableOpacity>
            )}
            {leftCustomView && leftCustomView()}
            <TextInput
                style={[styles.input, inputStyle]}
                placeholderTextColor="#999"
                {...props}
                secureTextEntry={!eye}
            />
            {showEye &&
                <TouchableOpacity style={styles.iconContainer} onPress={onIconPress}>
                    <Image
                        source={eye ? images.eyeOpen : images.eyeClose}
                        resizeMode='contain'
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: '#0F69F1'
                        }}
                    />
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vs(20),
        marginHorizontal: hs(20),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 16,
        elevation: 5,
        backgroundColor: 'white'
    },
    input: {
        flex: 1,
        height: vs(56),
        fontSize: fs(16),
    },
    icon: {
        width: hs(20),
        height: vs(20),
        marginHorizontal: hs(10),
    },
    iconContainer: {
        height: vs(50),
        width: hs(35),
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CustomTextInput;