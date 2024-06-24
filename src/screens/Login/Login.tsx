import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../../utils/images";
import { fs, hs, vs } from "../../utils/styleUtils";
import CustomTextInput from "../../components/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { CountryPicker } from 'react-native-country-codes-picker';
import { setToken } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {

    const [countryCode, setCountryCode] = useState('1');
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const formData = new FormData();

            formData.append('country_code', countryCode);
            formData.append('mobile', phoneNumber);
            formData.append('push_token', '');
            formData.append('device_type', 'android');
            formData.append('device_id', 'wdcxc323ec2cevrfes');
            formData.append('password', password);

            const headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');

            const options = {
                method: 'POST',
                headers: headers,
                body: formData,
            };

            const response = await fetch('https://hexeros.com/dev/fund-tool/api/V1/login', options);
            const responseData = await response.json();

            if (response.ok) {
                await AsyncStorage.setItem('token', responseData?.data?.token);
                dispatch(setToken(responseData?.data?.token));
                navigation.navigate('Fundraiser');
            } else {
                Alert.alert('Login Failed', 'Invalid phone number or password');
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ImageBackground style={styles.BGImgStyle} source={images.bgImg}>
            <View style={styles.mainContainer}>
                <Image
                    source={images.fundToolTextImg}
                    resizeMode="contain"
                    style={styles.fundtoolTitle}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.loginTitle}>Login</Text>
                <Text style={styles.header2title}>Please login your account.</Text>

                <CustomTextInput
                    placeholder="Phone number"
                    placeholderTextColor={"#21212150"}
                    leftCustomView={() => {
                        return (
                            <TouchableOpacity
                                onPress={() => setPickerVisible(true)}
                                style={styles.leftCustomViewBtn}
                            >
                                <Text style={styles.countryCodeTitle}>{countryCode}</Text>
                                <Image
                                    source={images.arrowDown}
                                    resizeMode="contain"
                                    style={styles.arrowDownImg}
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
                    showEye
                />

                <Text style={styles.forgotPswText}>Forgot Password?</Text>

                <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
                    <LinearGradient colors={['#2C82AF', '#295772']} style={styles.linearGradientStyle}>
                        {isLoading ? <ActivityIndicator size={"large"} color={'white'} /> :
                            <Text style={styles.loginBtnTxt}>
                                Login
                            </Text>
                        }
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.noAccTxt}>Didn’t get any account ?<Text style={styles.signupTxt}> Sign Up</Text></Text>
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

const styles = StyleSheet.create({
    BGImgStyle: {
        flex: 1
    },
    mainContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    fundtoolTitle: {
        width: '70%',
        height: '55%',
    },
    container: {
        backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25,
    },
    loginTitle: {
        marginTop: vs(40), color: '#212121', textAlign: 'center', fontWeight: '700', fontSize: fs(24)
    },
    header2title: {
        marginTop: vs(5), color: '#21212150', textAlign: 'center', fontWeight: '400', fontSize: fs(16)
    },
    leftCustomViewBtn: {
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: hs(10)
    },
    countryCodeTitle: {
        marginRight: hs(5)
    },
    arrowDownImg: {
        width: hs(20),
        height: vs(20)
    },
    forgotPswText: {
        marginTop: vs(20), color: '#545454', textAlign: 'center', fontWeight: '600', fontSize: fs(14)
    },
    loginBtn: {
        elevation: 15, marginTop: vs(25), height: vs(55), marginHorizontal: hs(45), borderRadius: 100, overflow: 'hidden'
    },
    linearGradientStyle: {
        height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'
    },
    loginBtnTxt: {
        color: '#FFFFFF', fontSize: fs(16), fontWeight: '700'
    },
    noAccTxt: {
        marginTop: vs(15), marginBottom: vs(15), color: '#212121', textAlign: 'center', fontWeight: '400', fontSize: fs(15)
    },
    signupTxt: {
        color: '#2B607B', fontWeight: '600', fontSize: fs(15)
    }
})