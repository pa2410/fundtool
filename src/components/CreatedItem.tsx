import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import images from '../utils/images';
import { hs, vs } from '../utils/styleUtils';

interface createdItemProps {
  item: any;
  index: number;
}

const CreatedItem = ({ item, index }: createdItemProps) => {

  const amount = '$50000';
  const goalAmount = `$${item?.goal_amount}`;

  return (
    <View
      key={index}
      style={styles.mainContainer}>
      <View
        style={styles.header}>
        <Image
          source={images.bgItemImg}
          style={styles.BGImg}
        />
        <Text
          style={styles.fundraiserName}
          numberOfLines={2}>
          {item?.fundraiser_name}
        </Text>
      </View>
      <View style={styles.details}>
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
        source={{ uri: item?.logo }}
        style={styles.logo}
      />
    </View>
  );
};

export default CreatedItem;

const styles = StyleSheet.create({
  mainContainer: {
    height: vs(112),
    marginTop: vs(15),
    marginHorizontal: hs(15),
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  header: {
    height: vs(56),
    justifyContent: 'flex-end',
  },
  BGImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  fundraiserName: {
    marginLeft: hs(112),
    marginRight: hs(20),
    marginBottom: vs(5),
  },
  details: {
    height: vs(56), backgroundColor: 'white', flexDirection: 'row'
  },
  goalContainer: {
    marginLeft: hs(112), marginTop: vs(10)
  },
  goalText: {
    marginRight: vs(20),
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
  logo: {
    height: vs(82),
    width: vs(82),
    position: 'absolute',
    left: hs(15),
    borderRadius: 5
  }
})