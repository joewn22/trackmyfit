import Colors from "@/constants/colors";
import { TextInput, View } from "react-native";

const CTextInput = ({
	value,
	onValueChange,
	label,
	placeholder,
}: TextInputProps) => {
	return (
		<View className="flex flex-col w-[100%] gap-1 items-center">
			<TextInput
				className="w-[90%] h-[50px] bg-white/10 p-3 border border-1 rounded-md border-[#D5D6D7]"
				onChangeText={onValueChange}
				value={value}
				placeholder={placeholder}
				placeholderTextColor={Colors.offWhite}
				style={{ fontSize: 12, color: "white" }}
			/>
		</View>
	);
};

export default CTextInput;
