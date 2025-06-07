import { StyleSheet, Text, View } from "react-native";

const InlineError = ({ text, centered }: RequiredTextViewProps) => {
	return (
		<View style={centered ? styles.centerAlignedView : styles.leftAlignView}>
			<Text style={centered ? styles.textCentered : styles.textLeft}>
				{text}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	centerAlignedView: {
		display: "flex",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	leftAlignView: {
		display: "flex",
		width: "100%",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	textCentered: {
		color: "red",
		fontSize: 12,
	},
	textLeft: {
		color: "red",
		fontSize: 11,
	},
});

export default InlineError;
