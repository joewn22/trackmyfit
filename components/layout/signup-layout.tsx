import Colors from "@/constants/colors";
import { UserEdit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ReactNode } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Linear from "../background/linear";

export default function SignUpLayout({
	header,
	subheading,
	image,
	children,
}: {
	header: string;
	subheading?: string;
	image?: string;
	children: ReactNode;
}) {
	return (
		<Linear>
			<View style={styles.conatiner}>
				<View className="flex flex-col justify-end gap-5 h-[25%] px-4">
					<View className="flex-row items-end justify-between w-full">
						<Text className="text-white text-[36px] w-60 font-medium">
							{header}
						</Text>
						<View style={styles.circle}>
							<HugeiconsIcon icon={UserEdit01Icon} color="white" />
						</View>
					</View>
					<Text className="text-white text-md w-full font-normal">
						{subheading}
					</Text>
				</View>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={{ flex: 1 }}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						{children}
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</View>
		</Linear>
	);
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		backgroundColor: "transparent",
		padding: 20,
		gap: 30,
	},
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
