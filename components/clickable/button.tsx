import Colors from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CButton = ({ title, onClick }: ButtonProps) => {
	return (
		<View className="w-full justify-center items-center">
			<TouchableOpacity
				className="flex justify-center items-center w-[80%] h-14 rounded-md"
				style={styles.button}
				onPress={onClick}
			>
				<Text className="text-white font-medium">{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
	},
});

export default CButton;
