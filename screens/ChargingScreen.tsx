import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { LocationObjectCoords, LocationObject } from 'expo-location';

import * as config from '../config.json';

import Button from '../components/Button';
import { styles } from '../styles';

const apiKey = config.apiKey;
const url = `https://api.openchargemap.io/v3/poi?key=${apiKey}`;

export default function ChargingScreen({ navigation }): JSX.Element {
	const [location, setLocation] = useState<LocationObject | null>();
	const [nearbyChargers, setNearbyChargers] = useState<any>();
	const [selectedCharger, setSelectedCharger] = useState<any | null>(null);
	const [errorMsg, setErrorMsg] = useState('');

	interface IAddressInfo {
		AddressLine1: String;
	}

	interface ICharger {
		AddressInfo: IAddressInfo;
		ID: String;
	}

	const getLocation = async (): Promise<LocationObjectCoords> => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
		}
		const location = await Location.getCurrentPositionAsync({});
		setLocation(location);
		return location.coords;
	};

	const getNearbyChargers = async (
		latitude: Number,
		longitude: Number
	): Promise<Response> => {
		let apiCall =
			url + `&latitude=${latitude}&longitude=${longitude}&maxresults=10`;
		console.log(apiCall);
		const response = await fetch(apiCall).then(res => {
			return res.json();
		});
		console.log(response);
		setNearbyChargers(response);
		return response;
	};

	const sendSelectedCharger = async (charger: ICharger): Promise<Response> => {
		const response = await fetch('https://example.ev.energy/chargingsession', {
			method: 'POST',
			body: JSON.stringify({
				user: 1,
				car_id: 1,
				charger_id: charger.ID,
			}),
		}).catch(error => alert(error.message));
		return response;
	};

	useEffect(() => {
		(async () => {
			const { latitude, longitude } = await getLocation();
			await getNearbyChargers(latitude, longitude);
		})();
	}, []);

	// let text: string = 'Waiting to get your location...';
	// if (errorMsg) {
	// 	text = errorMsg;
	// } else if (location) {
	// 	text = JSON.stringify(location);
	// }

	return (
		<SafeAreaView style={styles.homeContainer}>
			<ScrollView>
				<Text style={styles.subHeader}>Electric Vehicle Chargers Near You</Text>
				{nearbyChargers.map(charger => {
					return (
						<TouchableOpacity onPress={() => setSelectedCharger(charger)}>
							<Text
								style={{
									color:
										selectedCharger && selectedCharger.ID === charger.ID
											? 'rgb(79, 250, 96)'
											: 'black',
								}}
								key={charger.id}
							>
								{charger.AddressInfo.AddressLine1}
							</Text>
						</TouchableOpacity>
					);
				})}
				<Button message='Start Charging' onPress={sendSelectedCharger} />
			</ScrollView>
		</SafeAreaView>
	);
}
