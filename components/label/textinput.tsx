import { Text } from "react-native";

const TextInputLabel = ({ label }: { label: string }) => {
	return <Text style={{ fontSize: 14 }}>{label}</Text>;
};

export default TextInputLabel;
