import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { styles } from '../styles';


const WelcomeScreen = (): JSX.Element => {
	return (
		<View>
			<Text style={styles.header}>
				Welcome to <Text style={styles.span}>ev.energy</Text>
			</Text>
			<Text style={styles.text}>
				Please press continue to find an electric vehicle charger near you
      </Text>
      <Button/>
		</View>
	);
};

export default WelcomeScreen;

