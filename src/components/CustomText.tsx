import React from 'react';
import { Text, TextStyle, StyleSheet, TextProps } from 'react-native';
import { mpStyle } from '../utils/styleUtils';

interface CustomTextProps extends TextProps {
    style?: TextStyle;
    children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ style, children, ...props }) => {
    return (
        <Text style={[styles.text, style, mpStyle(style)]} {...props}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default CustomText;