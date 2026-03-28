import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, RefreshControl, StyleSheet } from 'react-native';
import { ProductItem } from '../components/ProductItem';
import { products, Product } from '../data/products';

export function ProductListScreen({ navigation }: any) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    // Имитация загрузки данных
    await new Promise(resolve => setTimeout(resolve, 1500));
    setRefreshing(false);
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <ProductItem 
      product={item} 
      onPress={(p) => navigation.navigate('ProductDetail', { product: p })} 
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.header}>Our Products ({products.length})</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 16,
    marginVertical: 12,
  },
});