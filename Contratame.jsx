import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Contratame = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>¡Contrátame!</Text>
			<Image style={styles.image} source={require("./assets/yo.jpg")} />
			<Text style={styles.subtitle}>Ricardo Emmanuel De La Cruz Martinez</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 16,
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: "contain",
		marginBottom: 16,
	},
	subtitle: {
		fontSize: 24,
		fontWeight: "bold",
	},
});

export default Contratame;
