import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import DateTimePicker, {
	DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export function CDOBInput({ date, setDate, placeholder }: DOBInputProps) {
	const [showPicker, setShowPicker] = useState(false);

	const handleDateChange = (
		event: DateTimePickerEvent,
		selectedDate?: Date
	) => {
		setShowPicker(false);
		if (selectedDate) setDate(selectedDate);
	};

	return (
		<View className="flex w-full items-center justify-center mb-4 ">
			<TouchableOpacity
				onPress={() => setShowPicker(!showPicker)}
				className="flex-row items-center gap-5 px-4 py-3 w-[90%] h-[50px] bg-white/10 p-3 border border-1 rounded-md border-[#D5D6D7]"
			>
				<HugeiconsIcon icon={Calendar03Icon} color="white" />
				<Text className="text-white text-sm">
					{date ? date.toDateString() : placeholder}
				</Text>
			</TouchableOpacity>

			{showPicker && (
				<DateTimePicker
					value={date || new Date(2000, 0, 1)}
					mode="date"
					display={Platform.OS === "ios" ? "inline" : "default"}
					maximumDate={new Date()}
					onChange={handleDateChange}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 12,
	},
	label: {
		marginBottom: 6,
		fontWeight: "500",
		fontSize: 14,
	},
	input: {
		padding: 12,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	dateText: {
		color: "#333",
	},
});
