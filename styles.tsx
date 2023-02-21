import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 30,
	},
	header: {
		fontSize: 40,
		textAlign: 'center',
		paddingBottom: 60,
	},
	text: {
		fontSize: 18,
		textAlign: 'center',
  },
  span: {
    color: 'rgb(79, 250, 96)'
  },
  button: {
    backgroundColor: 'rgb(79, 250, 96)',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 90,
    marginHorizontal: 10,
    borderWidth: 2,
  },
  buttonText: {
    marginVertical: 10,
    borderColor: 'black',
  }
});
