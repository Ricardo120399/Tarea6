import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImagenCentrada = () => {
	return (
		<View style={styles.container}>
			<Image source={require("./assets/caja.avif")} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: 'white',
	},
	image: {
		width: "200px",
		height: "100%",
		resizeMode: "contain",
	},
});

export default ImagenCentrada;
