import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const Linear = ({ children }: { children: React.ReactNode }) => {
	return (
		<LinearGradient colors={["#425567", "#011936"]} style={styles.gradient}>
			<View className="w-full h-full">{children}</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	gradient: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Linear;
