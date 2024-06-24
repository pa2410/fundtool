import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, buttonStyle, textStyle, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, disabled ? styles.disabledButton : {}]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle, disabled ? styles.disabledText : {}]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: '#A0A0A0',
    },
    disabledText: {
        color: '#D0D0D0',
    },
});

export default CustomButton;