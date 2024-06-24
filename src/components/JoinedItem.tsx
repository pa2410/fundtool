import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import images from '../utils/images';
import { hs, vs } from '../utils/styleUtils';

interface joinedItemProps {
  item: any;
  index: number;
}

const JoinedItem = ({ item, index }: joinedItemProps) => {

  const amount = '$50000';
  const goalAmount = `$${item?.goal_amount}`;

  return (
    <View
      key={index}
      style={styles.container}>
      <View
        style={styles.header}>
        <Image
          source={images.bgItemImg}
          style={styles.bgItemImg}
        />
        <Text
          style={styles.nameStyle}
          numberOfLines={2}>
          {item?.fundraiser_name}
        </Text>
      </View>
      <View
        style={styles.detail}>
        <View style={styles.goalContainer}>
          <Text
            style={styles.goalText}
            numberOfLines={1}>
            {`Goal: ${goalAmount}`}/{amount}
          </Text>
          <Text
            style={styles.goalText}
            numberOfLines={1}>
            {`Members: ${item?.in_percantage}`}
          </Text>
        </View>
        <View
          style={styles.arrowImgContainer}>
          <Image
            source={images.arrowRight}
            resizeMode="contain"
            style={styles.arrowRightImg}
          />
        </View>
      </View>
      <Image
        source={{uri: item?.logo}}
        style={styles.logo}
      />
    </View>
  );
};

export default JoinedItem;

const styles = StyleSheet.create({
  container: {
    height: 112,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  header: {
    height: 56,
    justifyContent: 'flex-end',
  },
  bgItemImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  nameStyle: {
    marginLeft: 112,
    marginRight: 20,
    marginBottom: 5,
  },
  detail: {
    height: 56, backgroundColor: 'white', flexDirection: 'row'
  },
  goalContainer: {
    marginLeft: 112, marginTop: 10
  },
  goalText: {
    marginRight: 20,
  },
  logo: {
    height: 82,
    width: 82,
    position: 'absolute',
    left: 15,
    borderRadius: 5
  },
  arrowImgContainer: {
    borderWidth: 1,
    position: 'absolute',
    right: hs(15),
    top: vs(7),
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
})