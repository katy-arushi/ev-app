import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const Button = (): JSX.Element => {
	return (
		<TouchableOpacity onPress={() => console.log("hello")} style={styles.button}>
			<Text style={styles.buttonText}>Continue</Text>
		</TouchableOpacity>
	);
};

export default Button