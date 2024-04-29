import React, { useState } from 'react';
import { Div, Text, Input, Image, Icon, Tag } from 'react-native-magnus';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import food from '../products.json';

export default function Home({navigation}) {
  const [data, setData] = useState(food.products);
  const [Keyword, setKeyword] = useState("");

    const filteredData = data.filter((data) => {
      const name = data.name.toLowerCase()
      const category = data.category.toLowerCase()
      const description = data.description.toLowerCase()
      const keyword = Keyword.toLowerCase()
  
      return name.includes(keyword) || category.includes(keyword) || description.includes(keyword)
    })


  const renderProducts = filteredData.map((data) =>{
    return(
      <TouchableOpacity onPress={() => navigation.navigate('Product', { product: data})}>
      <View key={data.id} style={styles.productContainer}>
      <Div rounded="md">
        <Image h={200} w={200} source={{ uri: data.image }} onError={(error) => {console.log(error)}}/>
      </Div>
      <Div row alignItems="center">
      <Div flex={1}>
      <Div>
        <Tag bg='green500'>
          <Text color='white' fontSize='xl'>
            {data.rating}
          </Text>
        </Tag>
        </Div>
        <Text fontWeight="bold" fontSize="3xl" mt="sm">
          {data.name}
        </Text>
        <Text color="gray500" fontSize="xl">
          {data.description}
        </Text>
      </Div>
      <Div flex={1} alignItems='flex-end'>
        <Text color="blue500" fontWeight="bold" fontSize="6xl" mb="sm">
          {data.price}
        </Text>
      </Div>
    </Div>
    </View>
    </TouchableOpacity>
    )
  })

  return (
    <ScrollView style={styles.scrollview}>
    <View style={styles.container}>
      <Div bg="teal500" px={50} rounded="xl" m="xl">
        <Text fontSize="6xl" fontWeight="bold" color="gray100" mt="lg" px="md">
          Order Your Food Now Before It Is Too <Text fontSize="6xl" fontWeight="bold" color="red300">Cold</Text>
        </Text>
        <Input
          placeholder="Search dishes, restaurants"
          mb="xl"
          
          onChangeText={text => setKeyword(text)}
          focusBorderColor="green400"
          suffix={<Icon name="search" fontFamily="Feather" />}
        />
      </Div>
      <Text fontSize="xl" color="gray900" mt="lg" px="md" mb="lg">
        All Categories
      </Text>
        <View style={{ flexDirection: 'row', justifyContent:'center', gap:10 }}>
        <TouchableOpacity onPress={() => setKeyword('food')}>
          <View style={{ marginRight: 16 }}>
            <Div rounded="md">
              <Image h={100} w={100} source={require('../assets/food.png')} />
            </Div>
            <Text fontSize="md" mt={20} color="gray500" textAlign="center">
              Food
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeyword('drink')}>
          <View style={{ marginRight: 16 }}>
            <Div rounded="md">
              <Image h={100} w={100} source={require('../assets/drink.png')} />
            </Div>
            <Text fontSize="md" mt={20} color="gray500" textAlign="center">
              Drink
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeyword('dessert')}>
          <View style={{ marginRight: 16 }}>
            <Div rounded="md">
              <Image h={100} w={100} source={require('../assets/dessert.png')} />
            </Div>
            <Text fontSize="md" mt={20} color="gray500" textAlign="center">
              Dessert
            </Text>
          </View>
          </TouchableOpacity>
        </View>
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
