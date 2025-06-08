import AuthNav from "@/components/clickable/auth-nav";
import CounterInput from "@/components/input/counter";
import SignUpLayout from "@/components/layout/signup-layout";
import { useState } from "react";
import { Text, View } from "react-native";

export default function FitnessLevel() {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	return (
		<SignUpLayout header="How’s your fitness?">
			<View className="flex flex-col justify-between h-[85%] px-4">
				<View className="gap-16">
					<View className="flex-col gap-5">
						<Text className="text-3xl text-white font-medium">Body</Text>
						<AuthNav
							navlabel="Learn more"
							question="Not sure?"
							onClick={() => {}}
						/>
						<View className="flex-row justify-between items-center">
							<CounterInput
								title="Height(cm)"
								count={height}
								setCount={setHeight}
							/>
							<CounterInput
								title="Weight(kg)"
								count={width}
								setCount={setWidth}
							/>
						</View>
					</View>
					<View className="flex-col gap-5">
						<Text className="text-3xl text-white font-medium">
							Fitness level
						</Text>
					</View>
				</View>
			</View>
		</SignUpLayout>
	);
}
