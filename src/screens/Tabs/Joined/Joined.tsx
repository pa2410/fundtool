import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import JoinedItem from '../../../components/JoinedItem';
import { vs } from '../../../utils/styleUtils';
import { RootState } from '@reduxjs/toolkit/query';

const Joined = () => {

  const [joinedData, setJoinedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    fetchedCreatedLists();
  }, []);

  const fetchedCreatedLists = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://hexeros.com/dev/fund-tool/api/V1/home', {
        method: 'POST',
        headers: {
          'VAuthorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      setJoinedData(responseData?.data?.joined_fund);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={joinedData}
        renderItem={({ item, index }) => {
          return <JoinedItem item={item} index={index} />
        }}
        keyExtractor={({ item, index }) => index + ''}
        contentContainerStyle={{ paddingBottom: vs(20) }}
      />
      {isLoading && <ActivityIndicator size={'large'} color={'green'} />}
    </View>
  );
};

export default Joined;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
