import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

import Caja from "./Caja.jsx";
import Genero from "./Genero.jsx";
import Edad from "./Edad.jsx";
import UniversidadesPais from "./UniversidadesPais.jsx";
import Clima from "./Clima.jsx";
import Contratame from "./Contratame.jsx";

const App = () => {
	const [activeScreen, setActiveScreen] = useState("Portada");

	const handleScreenChange = (screenName) => {
		setActiveScreen(screenName);
	};

	const renderScreen = () => {
		switch (activeScreen) {
			case "Caja":
				return <Caja />;
			case "Genero":
				return <Genero />;
			case "Edad":
				return <Edad />;
			case "UniversidadesPais":
				return <UniversidadesPais />;
			case "Clima":
				return <Clima />;
      case "Contratame":
        return <Contratame />;
			default:
				return <Caja />;
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{renderScreen()}
			<Button title="Caja" onPress={() => handleScreenChange("Caja")} />
			<Button title="Genero" onPress={() => handleScreenChange("Genero")} />
			<Button title="Edad" onPress={() => handleScreenChange("Edad")} />
			<Button
				title="Universidades Pais"
				onPress={() => handleScreenChange("UniversidadesPais")}
			/>
			<Button title="Clima" onPress={() => handleScreenChange("Clima")} />
			<Button
				title="Contratame"
				onPress={() => handleScreenChange("Contratame")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bottomNavigationBar: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
		gridGap: 40,
		height: 64,
		backgroundColor: "#F5F5F5",
		paddingHorizontal: 16,
		borderTopWidth: 1,
		borderTopColor: "#EFEFEF",
	},
	button: {
		flex: 1,
		marginHorizontal: 10,
		width: 50,
	},
});

export default App;
