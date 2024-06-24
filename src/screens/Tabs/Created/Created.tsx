import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import CreatedItem from '../../../components/CreatedItem';
import { vs } from '../../../utils/styleUtils';
import { RootState } from '@reduxjs/toolkit/query';

const Created = () => {

  const [createdData, setCreatedData] = useState<any[]>([]);
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
      setCreatedData(responseData?.data?.my_fund);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={createdData}
        renderItem={({ item, index }) => {
          return <CreatedItem item={item} index={index} />
        }}
        keyExtractor={({ item, index }) => index + ''}
        contentContainerStyle={{ paddingBottom: vs(20) }}
      />
      {isLoading && <ActivityIndicator size={"large"} color={'green'} />}
    </View>
  );
};

export default Created;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white'
  }
})
