# electric vehicle charging station finder

// ## [instructions](https://ev-energy.notion.site/Mobile-Engineer-tech-test-2aef31071f4f450f8b330749b26ed350)

This app was generated using `npx create-expo-app --template` and specifying the 'blank app with TS enabled'. Further screens, components, styling and navigation was added by myself. 

### Overview
My app involves the creation of a Charging screen where first, permission to access the user's precise location is asked. Then, the user's latitude and longitude coordinates are sent to the [OpenChargeMap's](https://openchargemap.org/site/develop/api#/) to locate the closest electric vehicle chargers near them. Once the user has selected a charger, a POST request is sent to the ev.energy backend with the charger's ID and the user is able to start charging.

### Cleanup and Improvements
In the future, the API calls could be cleaned up and separated into helper functions to keep the charging screen code limited to UI components. Currently, known bugs include the issue that in `ChargingScreen.tsx`, `nearbyChargers` is often caught as undefined to the lag of the API call, causing the whole screen to fail to render. This could be solved with adding a loading component to render a conditional UI when the list of nearby chargers is being loaded.

### Available Scripts
- `npx expo start` will start the dev server. From here you are able to launch the app using your mobile device or in a simulator.


#### Dependencies
- @react-navigation/native: ^6.1.4
- @react-navigation/native-stack: ^6.9.10
- expo: ~47.0.12
- expo-status-bar: ~1.4.2
- react": "18.1.0
- react-dom: 18.1.0",
- react-native: 0.70.5
- react-native-safe-area-context: 4.4.1
- react-native-screens: ~3.18.0
- react-native-web: ~0.18.9
- @expo/webpack-config: ^0.17.2
- expo-location: ~15.0.1
