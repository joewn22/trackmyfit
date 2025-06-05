import Texture from "@/components/background/texture";
import CButton from "@/components/clickable/button";
import LoginNav from "@/components/clickable/login-nav";
import CTextInput from "@/components/input/text";
import { CallIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import React, { useState } from "react";
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const Login = () => {
	const [activeTab, setActiveTab] = useState<LoginSwitch>("email");

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
								style={styles.buttonMail}
								onPress={() => setActiveTab("email")}
							>
								<HugeiconsIcon icon={Mail01Icon} color="white" />
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.buttonPhone}
								onPress={() => setActiveTab("phone")}
							>
								<HugeiconsIcon icon={CallIcon} color="white" />
							</TouchableOpacity>
						</View>
						<View className="flex items-center w-full gap-0">
							<Text className="text-9xl text-white">
								{activeTab === "email" ? "Email" : "Phone"}
							</Text>
							<CTextInput
								placeholder="Enter your email"
								value=""
								onValueChange={() => {}}
							/>
						</View>
						<View className="w-full flex items-center mt-5 gap-5">
							<CButton title="Login" onClick={() => {}} />
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
	buttonPhone: {
		maxWidth: 40,
		alignItems: "center",
	},
});

export default Login;
