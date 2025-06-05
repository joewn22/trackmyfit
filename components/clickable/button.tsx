import Colors from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CButton = ({ title, onClick }: ButtonProps) => {
	return (
		<TouchableOpacity
			className="flex justify-center items-center w-[80%] h-10 rounded-md"
			style={styles.button}
			onPress={onClick}
		>
			<Text className="text-white">{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
	},
});

export default CButton;
