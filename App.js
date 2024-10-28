import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/HomeScreen';
import SixMonthCoursesScreen from './components/screens/Six-MonthCoursesScreen';
import SixWeekCoursesScreen from './components/screens/SixWeekCoursesScreen';
import BookingScreen from './components/screens/BookingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCoursesScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
