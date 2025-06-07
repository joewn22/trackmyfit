import Texture from "@/components/background/texture";
import CButton from "@/components/clickable/button";
import LoginNav from "@/components/clickable/login-nav";
import PhoneNumberInput from "@/components/input/phone-number";
import CTextInput from "@/components/input/text";
import InlineError from "@/components/label/inline-error";
import Colors from "@/constants/colors";
import { logger } from "@/lib/logger";
import { zodResolver } from "@hookform/resolvers/zod";
import { CallIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { z } from "zod";

const Login = () => {
	const [activeTab, setActiveTab] = useState<LoginSwitch>("email");
	const router = useRouter();

	const formSchema = z
		.object({
			email: z.string().email("Please enter a valid email address").optional(),
			phone: z
				.string()
				.regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")
				.optional(),
		})
		.refine((data) => data.email || data.phone, {
			message: "Either email or phone is required",
			path: ["email"],
		})
		.refine(
			(data) => {
				if (data.email) {
					return z.string().email().safeParse(data.email).success;
				}
				if (data.phone) {
					return /^\+?[1-9]\d{1,14}$/.test(data.phone);
				}
				return true;
			},
			{
				message: "Please provide a valid email or phone number",
				path: ["email"],
			}
		);

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(formSchema),
	});

	const handleLogin = async (data: LoginDataProps) => {
		logger("data: ", data);
	};

	return (
		<Texture>
			<View style={styles.content}>
				<Image
					source={require("@/assets/images/logo.png")}
					style={styles.image}
				/>
				<ImageBackground
					source={require("@/assets/images/glass-card.png")}
					style={styles.card}
				>
					<View className="flex-col justify-start h-full items-center gap-4 py-8">
						<View className="flex flex-row items-center justify-center bg-white/15 backdrop-blur-sm rounded-md py-6 px-4 w-2/6 h-5 border border-white">
							<TouchableOpacity
								style={
									activeTab === "email"
										? styles.buttonMailActive
										: styles.buttonMail
								}
								onPress={() => setActiveTab("email")}
							>
								<HugeiconsIcon icon={Mail01Icon} color="white" />
							</TouchableOpacity>
							<TouchableOpacity
								style={
									activeTab === "phone"
										? styles.buttonPhoneActive
										: styles.buttonPhone
								}
								onPress={() => setActiveTab("phone")}
							>
								<HugeiconsIcon icon={CallIcon} color="white" />
							</TouchableOpacity>
						</View>
						<View className="flex items-center w-full gap-0">
							<Text className="text-9xl text-white">
								{activeTab === "email" ? "Email" : "Phone"}
							</Text>
							{activeTab === "email" ? (
								<Controller
									control={control}
									name="email"
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
										<>
											<CTextInput
												placeholder="Enter your email"
												value={value}
												onValueChange={onChange}
											/>
											{error?.message && <InlineError text={error?.message} />}
										</>
									)}
								/>
							) : (
								<Controller
									control={control}
									name="phone"
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
										<>
											<PhoneNumberInput
												value={value}
												onValueChange={onChange}
											/>
											{error?.message && <InlineError text={error?.message} />}
										</>
									)}
								/>
							)}
						</View>
						<View className="w-full flex items-center mt-5 gap-5">
							<CButton title="Login" onClick={handleSubmit(handleLogin)} />
							<LoginNav navlabel="Sign up" question="Don’t have an account?" />
						</View>
					</View>
				</ImageBackground>
			</View>
		</Texture>
	);
};

const styles = StyleSheet.create({
	gradient: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		alignItems: "center",
		height: "100%",
		justifyContent: "center",
		gap: 50,
		width: "100%",
		top: 80,
	},
	image: {
		width: 120,
		height: 120,
		resizeMode: "contain",
	},
	card: {
		justifyContent: "center",
		width: "100%",
		height: "75%",
	},
	buttonMail: {
		maxWidth: 40,
		alignItems: "center",
	},
	buttonMailActive: {
		width: 40,
		alignItems: "center",
		backgroundColor: Colors.surface,
		borderRadius: 5,
		height: 30,
		justifyContent: "center",
	},
	buttonPhone: {
		maxWidth: 40,
		alignItems: "center",
	},
	buttonPhoneActive: {
		width: 40,
		alignItems: "center",
		backgroundColor: Colors.surface,
		borderRadius: 5,
		height: 30,
		justifyContent: "center",
	},
});

export default Login;
