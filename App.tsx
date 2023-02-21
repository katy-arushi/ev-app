import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from './styles';

import WelcomeScreen from './screens/WelcomeScreen';

export default function App(): JSX.Element {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<View style={styles.homeContainer}>
				<WelcomeScreen />
				<StatusBar style='auto' />
			</View>
		</NavigationContainer>
	);
}