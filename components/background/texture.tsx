import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, View } from "react-native";

const Texture = ({ children }: { children: React.ReactNode }) => {
	return (
		<LinearGradient colors={["#425567", "#011936"]} style={styles.gradient}>
			<ImageBackground
				source={require("@/assets/images/texture.png")}
				style={styles.image}
				resizeMode="cover"
			>
				<View style={styles.content}>{children}</View>
			</ImageBackground>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	gradient: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	content: {
		alignItems: "center",
		backgroundColor: "transparent",
		height: "100%",
		justifyContent: "center",
		padding: "10%",
		gap: 15,
		width: "100%",
	},
});

export default Texture;
