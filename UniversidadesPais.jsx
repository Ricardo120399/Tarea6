import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	FlatList,
	TouchableOpacity,
} from "react-native";

const UniversidadesPais = () => {
	const [country, setCountry] = useState("");
	const [universities, setUniversities] = useState([]);
	const [error, setError] = useState("");

	const searchUniversities = () => {
		fetch(`http://universities.hipolabs.com/search?country=${country}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.length === 0) {
					setError("País no identificado");
				} else {
					setUniversities(data);
					setError("");
				}
			})
			.catch((error) => console.error(error));
	};

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.universityContainer}>
				<Text style={styles.universityName}>{item.name}</Text>
				<Text style={styles.universityDomain}>Dominio: {item.domains[0]}</Text>
				<Text style={styles.universityLink}>Link: {item.web_pages[0]}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Ingrese un país en ingles"
				value={country}
				onChangeText={setCountry}
			/>
			<TouchableOpacity style={styles.button} onPress={searchUniversities}>
				<Text style={styles.buttonText}>Buscar universidades</Text>
			</TouchableOpacity>
			{error !== "" && <Text style={styles.errorMessage}>{error}</Text>}
			<FlatList
				data={universities}
				keyExtractor={(item) => item.name}
				renderItem={renderItem}
				style={styles.universitiesList}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	input: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		marginBottom: 20,
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		textAlign: "center",
	},
	button: {
		width: "80%",
		height: 50,
		backgroundColor: "blue",
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
	universitiesList: {
		width: "80%",
	},
	universityContainer: {
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		marginBottom: 10,
	},
	universityName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
		marginBottom: 5,
	},
	universityDomain: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
		marginBottom: 5,
	},
	universityLink: {
		fontSize: 16,
		fontWeight: "bold",
		color: "blue",
		marginBottom: 5,
	},
	errorMessage: {
		fontSize: 16,
		fontWeight: "bold",
		color: "red",
		marginBottom: 20,
		textAlign: "center",
	},
});

export default UniversidadesPais;
