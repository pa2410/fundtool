import React from "react";
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import images from "../../utils/images";
import { fs } from "../../utils/styleUtils";
import CustomTextInput from "../../components/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {

    const navigation = useNavigation<any>();

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
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                                <Text style={{ marginRight: 5 }}>+1</Text>
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
                    rightIcon={images.mobileImg}
                />


                <CustomTextInput
                    placeholder="Password"
                    placeholderTextColor={"#21212150"}
                    rightIcon={images.eyeClose}
                />

                <Text style={{ marginTop: 20, color: '#545454', textAlign: 'center', fontWeight: '600', fontSize: fs(14) }}>Forgot Password?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Fundraiser')} style={{ elevation: 15, marginTop: 25, height: 55, marginHorizontal: 45, borderRadius: 100, overflow: 'hidden' }}>
                    <LinearGradient colors={['#2C82AF', '#295772']} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: fs(16), fontWeight: '700' }}>
                            Login
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={{ marginTop: 15, marginBottom: 15, color: '#212121', textAlign: 'center', fontWeight: '400', fontSize: fs(15) }}>Didn’t get any account ?<Text style={{ color: '#2B607B', fontWeight: '600', fontSize: fs(15) }}> Sign Up</Text></Text>
            </View>
        </ImageBackground>
    )
}

export default Login;