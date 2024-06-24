import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import images from '../../utils/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fs, hs, vs } from '../../utils/styleUtils';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Created from '../Tabs/Created/Created';
import Joined from '../Tabs/Joined/Joined';

const Tab = createMaterialTopTabNavigator();

const Fundraiser = () => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground style={styles.imgBGStyle} source={images.bgImg}>
      <View style={[styles.headerContainer, { marginTop: insets.top + 10 }]}>
        <Image
          source={images.fundToolTextImg}
          resizeMode="contain"
          style={styles.fundToolTxtImg}
        />

        <Image
          source={images.notificationImg}
          resizeMode="contain"
          style={styles.notificationImg}
        />
      </View>

      <View style={styles.container}>
        <Image
          source={images.groupInvitationCode}
          resizeMode="contain"
          style={styles.grpInvitationCodeImg}
        />
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.containerTitle}>
              Create a Fundraiser
            </Text>
            <Text style={styles.containerTitle2}>
              Schedule a fundraiser for your group
            </Text>
          </View>

          <View style={styles.arrowImgContainer}>
            <Image
              source={images.arrowRight}
              resizeMode="contain"
              style={styles.arrowRightImg}
            />
          </View>

          <View style={styles.vectorContainer}>
            <Image
              source={images.vectorImg}
              resizeMode="contain"
              style={styles.vectorImg}
            />
          </View>
        </View>

        <View
          style={styles.topfundraiserContainer}>
          <Text style={styles.fundraiserTitle}>
            Top Fundraisers
          </Text>
          <Text style={styles.viewAllTxt}>
            View All
          </Text>
        </View>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => {
              return (
                <Text style={{
                  color: focused ? 'white' : '#666666',
                  fontSize: fs(16),
                  fontWeight: 'bold',
                }}>
                  {route.name === 'Created' ? 'Created by me' : 'Joined by me'}
                </Text>
              );
            },
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              borderRadius: 25,
              margin: 10,
              overflow: 'hidden',
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'green',
              height: '100%',
              borderRadius: 25,
            },
          })}
        >
          <Tab.Screen name="Created" component={Created} />
          <Tab.Screen name="Joined" component={Joined} />
        </Tab.Navigator>

      </View>
    </ImageBackground>
  );
};

export default Fundraiser;

const styles = StyleSheet.create({
  imgBGStyle: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundToolTxtImg: {
    width: hs(156),
    height: vs(30),
  },
  notificationImg: {
    width: hs(18),
    height: vs(18),
    position: 'absolute',
    right: hs(15),
  },
  container: {
    flex: 1, backgroundColor: 'white', marginTop: vs(15)
  },
  grpInvitationCodeImg: {
    width: hs(315),
    height: vs(172),
    alignSelf: 'center',
    marginTop: vs(15)
  },
  container2: {
    elevation: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    marginTop: vs(20),
    marginHorizontal: hs(20),
    padding: 10,
  },
  container3:{
    flex: 1
  },
  containerTitle: {
    fontWeight: '700', fontSize: fs(22)
  },
  containerTitle2: {
    fontWeight: '400', fontSize: fs(12)
  },
  arrowImgContainer: {
    borderWidth: 1,
    marginRight: hs(20),
    justifyContent: 'center',
    alignItems: 'center',
    height: vs(25),
    width: hs(25),
    borderRadius: 100,
    borderColor: '#0050A0',
  },
  arrowRightImg: {
    width: hs(15),
    height: vs(15),
  },
  vectorContainer: {
    position: 'absolute', bottom: 0, right: 0
  },
  vectorImg: {
    width: hs(30),
    height: vs(30),
  },
  topfundraiserContainer: {
    marginTop: vs(15),
    marginHorizontal: hs(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fundraiserTitle: {
    fontWeight: '600', fontSize: fs(18), color: '#000000'
  },
  viewAllTxt: {
    fontWeight: '600', fontSize: fs(12), color: '#1D6B94'
  }
})
