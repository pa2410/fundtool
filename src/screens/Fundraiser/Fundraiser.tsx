import React from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import images from "../../utils/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fs } from "../../utils/styleUtils";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Created from "../Tabs/Created/Created";
import Joined from "../Tabs/Joined/Joined";
import LinearGradient from "react-native-linear-gradient";
import CustomTab from "../../components/CustomTab";

const Tab = createMaterialTopTabNavigator();

const Fundraiser = () => {

    const insets = useSafeAreaInsets();

    return (
        <ImageBackground style={{ flex: 1 }} source={images.bgImg}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: insets.top + 10 }}>
                <Image
                    source={images.fundToolTextImg}
                    resizeMode="contain"
                    style={{
                        width: 156,
                        height: 30,
                    }}
                />

                <Image
                    source={images.notificationImg}
                    resizeMode="contain"
                    style={{
                        width: 18,
                        height: 18,
                        position: 'absolute',
                        right: 15,

                    }}
                />
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 15 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ elevation: 15, borderRadius: 6, flexDirection: 'row', alignItems: 'center', borderWidth: 1, backgroundColor: 'white', borderColor: 'white', marginTop: 20, marginHorizontal: 20, padding: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '700', fontSize: fs(22) }}>Create a Fundraiser</Text>
                            <Text style={{ fontWeight: '400', fontSize: fs(12) }}>Schedule a fundraiser for your group</Text>
                        </View>

                        <View style={{ borderWidth: 1, marginRight: 20, justifyContent: 'center', alignItems: 'center', height: 25, width: 25, borderRadius: 100, borderColor: '#0050A0' }}>
                            <Image
                                source={images.arrowRight}
                                resizeMode="contain"
                                style={{
                                    width: 15,
                                    height: 15,
                                }}
                            />
                        </View>

                        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                            <Image
                                source={images.vectorImg}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 15, marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '600', fontSize: fs(18), color: '#000000' }}>Top Fundraisers</Text>
                        <Text style={{ fontWeight: '600', fontSize: fs(12), color: '#1D6B94' }}>View All</Text>
                    </View>

                    <FlatList
                        data={['fruit', 'fruit', 'fruit']}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity>
                                    <Text></Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

export default Fundraiser;