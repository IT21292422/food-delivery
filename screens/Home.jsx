import React, { useState } from 'react'
import { Div, Text, Input, Image, Icon } from "react-native-magnus";
import { View, ScrollView, StyleSheet } from 'react-native'
import food from "../products.json"

export default function Home() {
    const[data,setData]=useState(food.products)

    const renderProducts = data.map((product)=>{
        return(
            <View>
            <Div h={150} w={150} rounded="md" shadow="xs">
                <Image h={150} w={150} source={{uri:product.image}} />
            </Div>
            <Text fontSize="md" mt={20} color="gray500">
            {product.name}
          </Text>
          </View>
        )
    })

    return (
        <View style={styles.container}>
            <Div bg="yellow500">
                <Text
                    fontSize="6xl"
                    fontWeight="bold"
                    color="gray900"
                    mt="lg"
                    px="md"
                >
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
            <Text
                    fontSize="xl"
                    color="gray900"
                    mt="lg"
                    px="md"
                >
                    All Categories
                </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row' }}>
            {renderProducts}
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
