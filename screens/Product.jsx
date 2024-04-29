import React, { useState } from 'react';
import { Div, Text, Button, Tag } from 'react-native-magnus';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function Product({ route, navigation }) {
  const[count,setCount]=useState(0);
  const { product } = route.params

  const addCount = () => {
    var newCount = count + 1;
    setCount(newCount);
  }

  const decrementCount = () => {
    if(count>0){
      var newCount = count - 1;
      setCount(newCount);
    }
  }
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Div m="sm" rounded={10} shadow='sm' p={10} bg='white'>
          <Div row>
            <Div
              rounded="xl"
              flex={1}
              h={300}
              w="100%"
              mb="md"
              alignItems='center'
              bgMode='contain'
              bgImg={{ uri: product.image }}
            />
          </Div>
          <Div row mb={20}>
            <Div flex={1} alignItems='flex-start'>
              <Text fontWeight="bold" fontSize="3xl" mt="sm">
                {product.name}
              </Text>
              <Text color="gray500" fontSize="xl">
                {product.description}
              </Text>
            </Div>
            <Div col>
            <Tag bg='teal500' h={50} w={50} mb={5} ml={20}>
              <Text color='white' fontSize='xl'>
                {product.rating}
              </Text>
            </Tag>
            <Text color='black' fontSize="lg">
                +{product.reviews}&nbsp;Reviews
            </Text>
            </Div>
          </Div>
          <Div row>
            <Div mx="lg" flex={1} alignItems='flex-start'>
            <Text color='teal500' fontSize="6xl" fontWeight='700' mt={10}>
                {product.price}
              </Text>
            </Div>
            <Div row mx="lg">
              <Button w={50} h={50} mt="md" bg="teal500" fontSize="3xl" rounded="circle" onPress={decrementCount}>-</Button>
              <Text color='teal500' fontSize="6xl" fontWeight='700' mx={10} mt={5}>
                {count}
              </Text>
              <Button w={50} h={50} mt="md" bg="teal500" fontSize="3xl" rounded="circle" onPress={addCount}>+</Button>
            </Div>
            <Div mx="lg" alignItems='flex-end'>
              <Button w={200} h={50} mt="md" bg="teal500" fontSize="xl" rounded="md" >Add To Cart</Button>
            </Div>
          </Div>
        </Div>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  divider: {
    marginTop: 30,
    borderColor: '#D9D9D9',
    borderWidth: 3,
    marginHorizontal: 10,
    marginBottom: 30
  },
  list: {
    width: 'auto'
  },
  scrollview: {
    flex: 1,
    minHeight: '100%'
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

});