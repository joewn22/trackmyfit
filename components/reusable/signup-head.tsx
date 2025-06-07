import Colors from "@/constants/colors";
import { UserEdit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { StyleSheet, Text, View } from "react-native";

export default function SignUpHead({
	header,
	subheading,
	image,
}: {
	header: string;
	subheading?: string;
	image?: string;
}) {
	return (
		<View className="flex-row items-end justify-between w-full h-[20%] px-4">
			<Text className="text-white text-[36px] w-60 font-medium">{header}</Text>
			<View style={styles.circle}>
				<HugeiconsIcon icon={UserEdit01Icon} color="white" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	circle: {
		alignItems: "center",
		justifyContent: "center",
		width: 70,
		height: 70,
		borderRadius: 70 / 2,
		borderColor: Colors.offWhite,
		borderWidth: 1,
		backgroundColor: Colors.surface,
	},
});
