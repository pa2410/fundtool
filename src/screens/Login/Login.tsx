import React, { useState } from "react";
import { Alert, Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import images from "../../utils/images";
import { fs } from "../../utils/styleUtils";
import CustomTextInput from "../../components/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { CountryPicker } from 'react-native-country-codes-picker';
import { setToken } from "../../features/authSlice";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {

    const [countryCode, setCountryCode] = useState('1');
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            // Create a FormData object
            const formData = new FormData();
            formData.append('country_code', countryCode);
            formData.append('mobile', phoneNumber);
            formData.append('push_token', '');
            formData.append('device_type', 'android');
            formData.append('device_id', 'wdcxc323ec2cevrfes');
            formData.append('password', password);

            // Set headers for the FormData
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            // Send POST request using Axios
            const response = await axios.post(
                'https://hexeros.com/dev/fund-tool/api/V1/login',
                formData,
                config
            );
            console.log('response', response);

            if (response?.status == 200) {
                dispatch(setToken(response?.data?.token));
                navigation.navigate('Fundraiser');
            }
        } catch (error) {
            // Handle login failure
            Alert.alert('Login Failed', 'Invalid phone number or password');
            console.error(error);
        }
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={images.bgImg}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={images.fundToolTextImg}
                    resizeMode="contain"
                    style={{
                        width: '70%',
                        height: '55%',
                    }}
                />
            </View>

            <View style={{ backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, }}>
                <Text style={{ marginTop: 40, color: '#212121', textAlign: 'center', fontWeight: '700', fontSize: fs(24) }}>Login</Text>
                <Text style={{ marginTop: 5, color: '#21212150', textAlign: 'center', fontWeight: '400', fontSize: fs(16) }}>Please login your account.</Text>

                <CustomTextInput
                    placeholder="Phone number"
                    placeholderTextColor={"#21212150"}
                    leftCustomView={() => {
                        return (
                            <TouchableOpacity
                                onPress={() => setPickerVisible(true)}
                                style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                                <Text style={{ marginRight: 5 }}>{countryCode}</Text>
                                <Image
                                    source={images.arrowDown}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    rightIcon={images.mobileImg}
                    keyboardType="phone-pad"
                />


                <CustomTextInput
                    placeholder="Password"
                    placeholderTextColor={"#21212150"}
                    rightIcon={images.eyeClose}
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={{ marginTop: 20, color: '#545454', textAlign: 'center', fontWeight: '600', fontSize: fs(14) }}>Forgot Password?</Text>

                <TouchableOpacity onPress={handleLogin} style={{ elevation: 15, marginTop: 25, height: 55, marginHorizontal: 45, borderRadius: 100, overflow: 'hidden' }}>
                    <LinearGradient colors={['#2C82AF', '#295772']} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: fs(16), fontWeight: '700' }}>
                            Login
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={{ marginTop: 15, marginBottom: 15, color: '#212121', textAlign: 'center', fontWeight: '400', fontSize: fs(15) }}>Didn’t get any account ?<Text style={{ color: '#2B607B', fontWeight: '600', fontSize: fs(15) }}> Sign Up</Text></Text>
            </View>

            <CountryPicker
                show={isPickerVisible}
                pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setPickerVisible(false);
                }}
                style={{ modal: { height: '50%' } }}
            />
        </ImageBackground>
    )
}

export default Login;