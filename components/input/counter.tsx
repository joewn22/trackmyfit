import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function CounterInput({
	title,
	count,
	setCount,
}: {
	title: string;
	count: number;
	setCount: (count: number) => void;
}) {
	return (
		<View className="gap-2">
			<View className="bg-white/10 border border-white rounded-md h-24 w-40 p-4 gap-2">
				<Text className="font-medium text-base text-white">{title}</Text>
				<Text className="text-3xl text-white">{count}</Text>
			</View>
			<View className="flex flex-row justify-between items-center">
				<TouchableOpacity
					onPress={() => {
						setCount((count -= 1));
					}}
				>
					<HugeiconsIcon icon={MinusSignIcon} color="white" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setCount((count += 1));
					}}
				>
					<HugeiconsIcon icon={PlusSignIcon} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
