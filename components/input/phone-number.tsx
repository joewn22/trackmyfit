import Colors from "@/constants/colors";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const PhoneNumberInput = ({
	value,
	onValueChange,
	ghost,
	code,
}: PhoneNumberInputProps) => {
	const phoneInput = useRef<PhoneInput>(null);
	const [formattedValue, setFormattedValue] = useState("");
	return (
		<View className="flex flex-col w-[100%] items-center gap-1">
			{/* @ts-ignore */}
			<PhoneInput
				ref={phoneInput}
				defaultValue={value}
				defaultCode={"ZA"}
				layout="first"
				placeholder="Enter phone number"
				onChangeText={(text) => {
					onValueChange(text);
				}}
				onChangeFormattedText={(text) => {
					setFormattedValue(text);
				}}
				onChangeCountry={(country) => {}}
				containerStyle={styles.containerStyle}
				textContainerStyle={styles.textContainerStyle}
				textInputStyle={styles.textInputStyle}
				codeTextStyle={styles.codeTextStyle}
				withDarkTheme={false}
				textInputProps={{
					placeholderTextColor: Colors.lightGrey,
					cursorColor: Colors.offWhite,
				}}
				renderDropdownImage={
					<HugeiconsIcon icon={ArrowDown01Icon} color="white" />
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	codeTextStyle: {
		fontSize: 12,
		height: 15,
		color: "white",
	},
	textInputStyle: {
		fontSize: 12,
		height: 40,
		color: "white",
	},
	textContainerStyle: {
		backgroundColor: "transparent",
		color: "white",
	},
	containerStyle: {
		borderColor: Colors.offWhite,
		borderWidth: 1,
		borderRadius: 4,
		padding: 0,
		width: "90%",
		height: 50,
		backgroundColor: "#FFFFFF1A",
	},
});

export default PhoneNumberInput;
