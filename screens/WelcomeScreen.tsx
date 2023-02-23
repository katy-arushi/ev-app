import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../components/Button';

import { styles } from '../styles';

export default function WelcomeScreen({ navigation }): JSX.Element {
	return (
		<SafeAreaView style={styles.homeContainer}>
			<Text style={styles.header}>
				Welcome to <Text style={styles.logoName}>ev.energy</Text>
			</Text>
			<Text style={styles.text}>
				Press continue to find an electric vehicle charger near you
			</Text>
			<Button
				message='Continue'
				onPress={navigation.navigate('ChargingScreen')}
			/>
		</SafeAreaView>
	);
}
