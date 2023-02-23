import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

type ButtonProps = {
  message: String;
  onPress: any;
};

export default function Button(props: ButtonProps): JSX.Element {

	return (
		<TouchableOpacity onPress={props.onPress} style={styles.button}>
			<Text style={styles.buttonText}>{props.message}</Text>
		</TouchableOpacity>
	);
};