import { ThemeProvider } from 'react-native-magnus';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './screens/Home'
import Product from './screens/Product'


const Stack = createStackNavigator();

export default function App() {

  return (
  <ThemeProvider>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" options={({route})=>({product: route.params.product})} component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
