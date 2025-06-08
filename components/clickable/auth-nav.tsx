import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const AuthNav = ({
	navlabel,
	question,
	onClick,
}: {
	navlabel: string;
	question: string;
	onClick: () => void;
}) => {
	const router = useRouter();

	return (
		<TouchableOpacity onPress={onClick} className="flex flex-row gap-2">
			<Text className="text-white font-light text-sm">{question}</Text>
			<Text className="text-white font-semibold text-sm">{navlabel}</Text>
		</TouchableOpacity>
	);
};

export default AuthNav;
