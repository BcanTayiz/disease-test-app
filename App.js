import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Description from './screens/Description'
import Precaution from './screens/Precaution'
import Severity from './screens/Severity'
import Symptoms from './screens/Symptoms'
import DiseaseList from './screens/DiseaseList'
import SymptomList from './screens/SymptomList'

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Precaution" component={Precaution} />
      <Tab.Screen name="Severity" component={Severity} />
      <Tab.Screen name="Symptoms" component={Symptoms} />
      <Tab.Screen name="Disease List" component={DiseaseList} />
      <Tab.Screen name="Symptom List" component={SymptomList} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Precaution" component={Precaution} />
        <Stack.Screen name="Severity" component={Severity} />
        <Stack.Screen name="Symptoms" component={Symptoms} />
        <Stack.Screen name="Disease List" component={DiseaseList} />
        <Stack.Screen name="Symptom List" component={SymptomList} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
