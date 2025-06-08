import Colors from "@/constants/colors";
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CDropdown({
	open,
	items,
	value,
	setValue,
	setOpen,
	placeholder,
}: DropDownProps) {
	return (
		<View className="flex w-full items-center justify-center bg-red-00">
			<DropDownPicker
				open={open}
				value={value}
				items={items}
				setOpen={setOpen}
				setValue={setValue}
				placeholder={placeholder}
				style={{
					borderColor: Colors.offWhite,
					borderWidth: 1,
					borderRadius: 4,
					padding: 0,
					width: "90%",
					height: 45,
					backgroundColor: "#FFFFFF1A",
				}}
				textStyle={{
					color: Colors.offWhite,
				}}
				placeholderStyle={{
					color: Colors.offWhite,
					fontSize: 12,
				}}
				dropDownContainerStyle={{
					backgroundColor: Colors.primary,
					borderColor: Colors.offWhite,
					width: "90%",
				}}
				containerStyle={{
					alignItems: "center",
				}}
				ArrowDownIconComponent={({ style }) => (
					<HugeiconsIcon icon={ArrowDown01Icon} color="white" />
				)}
				ArrowUpIconComponent={({ style }) => (
					<HugeiconsIcon icon={ArrowUp01Icon} color="white" />
				)}
			/>
		</View>
	);
}
