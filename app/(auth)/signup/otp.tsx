import AuthNav from "@/components/clickable/auth-nav";
import CButton from "@/components/clickable/button";
import SignUpLayout from "@/components/layout/signup-layout";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function SignUpOTP() {
	const router = useRouter();
	const otpArray = [1, 2, 3, 4];

	return (
		<SignUpLayout
			header="Verify that it’s you"
			subheading="Enter the one-time-pin sent to your email"
		>
			<View className="flex flex-col justify-between h-[85%]">
				<View className="flex justify-between h-[50%]">
					<View className="w-full justify-center items-center mt-2 h-[40%]">
						<Text className="font-medium text-2xl text-white">00:29</Text>
					</View>
					<View className="flex flex-col gap-2">
						<View className="flex flex-row items-center justify-center gap-6">
							{otpArray.map((index) => (
								<TextInput
									className="p-3 border border-1 rounded-md bg-white/10 border-[#D5D6D7] bg-grey"
									onChangeText={() => {}}
									value={""}
									style={{
										fontSize: 12,
										width: 50,
										height: 50,
									}}
									key={index}
								/>
							))}
						</View>
						<View className="w-full px-12 items-end">
							<Text className="font-medium text-white">Send again?</Text>
						</View>
					</View>
				</View>
				<View className="w-full justify-center items-center gap-2">
					<CButton
						title="Verify"
						onClick={() => {
							router.push("/(auth)/signup/fitness-level");
						}}
					/>
					<AuthNav
						navlabel="Go back"
						question="Need to change something?"
						onClick={() => router.back()}
					/>
				</View>
			</View>
		</SignUpLayout>
	);
}
