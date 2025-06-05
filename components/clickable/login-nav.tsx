import { Text, TouchableOpacity } from "react-native";

const LoginNav = ({
	navlabel,
	question,
}: {
	navlabel: string;
	question: string;
}) => {
	return (
		<TouchableOpacity className="flex flex-row gap-2">
			<Text className="text-white font-light text-sm">{question}</Text>
			<Text className="text-white font-semibold text-sm">{navlabel}</Text>
		</TouchableOpacity>
	);
};

export default LoginNav;
