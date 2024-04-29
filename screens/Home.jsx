import React, { useState } from 'react';
import { Div, Text, Input, Image, Icon } from 'react-native-magnus';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import food from '../products.json';

export default function Home() {
  const [data, setData] = useState(food.products);

  const renderProducts = data.map((data) =>{
    return(
      <View key={data.id} style={styles.productContainer}>
      <Div rounded="md">
        <Image h={200} w={200} source={{ uri: data.image }}   onError={(error) => {console.log(error)}}/>
      </Div>
      <Div row alignItems="center">
      <Div flex={1}>
        <Text fontWeight="bold" fontSize="xl" mt="sm">
          {data.name}
        </Text>
        <Text color="gray500" fontSize="sm">
          {data.description}
        </Text>
      </Div>
      <Div row alignItems="center">
        <Text color="blue500" fontWeight="bold" fontSize="xl">
          {data.price}
        </Text>
      </Div>
    </Div>
    </View>
    )
  })

  return (
    <ScrollView style={styles.scrollview}>
    <View style={styles.container}>
      <Div bg="yellow400">
        <Text fontSize="6xl" fontWeight="bold" color="gray900" mt="lg" px="md">
          Order Your Food Before It Is Too Cold
        </Text>
        <Input
          placeholder="Search dishes, restaurants"
          p={10}
          m={20}
          onChangeText={text => setKeyword(text)}
          focusBorderColor="green400"
          suffix={<Icon name="search" fontFamily="Feather" />}
        />
      </Div>
      <Text fontSize="xl" color="gray900" mt="lg" px="md" mb="lg">
        All Categories
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 16 }}>
            <Div rounded="md">
              <Image h={100} w={100} source={require('../assets/food.png')} />
            </Div>
            <Text fontSize="md" mt={20} color="gray500" textAlign="center">
              Food
            </Text>
          </View>
          <View style={{ marginRight: 16 }}>
            <Div rounded="md">
              <Image h={100} w={100} source={require('../assets/drink.png')} />
            </Div>
            <Text fontSize="md" mt={20} color="gray500" textAlign="center">
              Drink
            </Text>
          </View>
          <View style={{ marginRight: 16 }}>
            <Div rounded="md">
              <Image h={100} w={100} source={require('../assets/dessert.png')} />
            </Div>
            <Text fontSize="md" mt={20} color="gray500" textAlign="center">
              Dessert
            </Text>
          </View>
        </View>
      </ScrollView>
    {renderProducts}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollview: {
    flex: 1,
    minHeight: '100%'
  },
  productContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 16,
    paddingHorizontal:20
  },
});
