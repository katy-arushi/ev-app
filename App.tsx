import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import ChargingScreen from './screens/ChargingScreen';

export default function App(): JSX.Element {

	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<StatusBar style='auto' />
			<Stack.Navigator initialRouteName='ChargingScreen'>
				{/* <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} /> */}
				<Stack.Screen name='ChargingScreen' component={ChargingScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}