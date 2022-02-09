import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Home'
          }}
        />
        <Stack.Screen
          name='Todo'
          component={DetailsScreen}
          options={{
            title: 'Todo',
            headerTitle: 'Todo'
          }}
        />
      </Stack.Navigator>
      <HomeScreen />
    </NavigationContainer>
  );
}