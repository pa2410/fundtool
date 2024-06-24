import React from 'react';
import {Image, Text, View} from 'react-native';
import images from '../utils/images';

const FlatListItem = () => {
  return (
    <View
      style={{
        height: 112,
        backgroundColor: 'red',
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: 56,
          backgroundColor: 'pink',
          justifyContent: 'flex-end',
        }}>
        <Image
          source={images.vectorImg}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'green',
            position: 'absolute',
          }}
        />
        <Text
          style={{
            marginLeft: 112,
            marginRight: 20,
            marginBottom: 5,
          }}
          numberOfLines={2}>
          TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
        </Text>
      </View>
      <View
        style={{height: 56, backgroundColor: 'purple', flexDirection: 'row'}}>
        <View style={{marginLeft: 112, marginTop: 10}}>
          <Text
            style={{
              marginRight: 20,
            }}
            numberOfLines={1}>
            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
          </Text>
          <Text
            style={{
              marginRight: 20,
            }}
            numberOfLines={1}>
            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
          </Text>
        </View>
        {/* Paste image here */}
      </View>
      <Image
        source={images.vectorImg}
        style={{
          height: 82,
          width: 82,
          backgroundColor: 'green',
          position: 'absolute',
          left: 15,
        }}
      />
    </View>
  );
};

export default FlatListItem;
