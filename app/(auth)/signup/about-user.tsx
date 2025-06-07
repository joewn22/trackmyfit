import Linear from "@/components/background/linear";
import CButton from "@/components/clickable/button";
import CTextInput from "@/components/input/text";
import InlineError from "@/components/label/inline-error";
import SignUpHead from "@/components/reusable/signup-head";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { z } from "zod";

export default function SignupIndex() {
	const formSchema = z.object({
		name: z.string().min(1, "Please select enter your name"),
		email: z.string().email("Please enter a valid email address").optional(),
		phone: z
			.string()
			.regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")
			.optional(),
		gender: z.string().min(1, "Please select a gender"),
		dob: z.string().min(1, "Please select a date of birth"),
	});

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(formSchema),
	});

	return (
		<Linear>
			<View style={styles.conatiner}>
				<SignUpHead header="Tell us about you" />
				<View className="flex-col gap-7">
					<Controller
						control={control}
						name="name"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<CTextInput
									placeholder="Enter your name"
									value={value}
									onValueChange={onChange}
								/>
								{error?.message && <InlineError text={error?.message} />}
							</>
						)}
					/>
					<Controller
						control={control}
						name="email"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
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
					<Controller
						control={control}
						name="name"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<CTextInput
									placeholder="Enter your name"
									value={value}
									onValueChange={onChange}
								/>
								{error?.message && <InlineError text={error?.message} />}
							</>
						)}
					/>
					<Controller
						control={control}
						name="name"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<CTextInput
									placeholder="Enter your name"
									value={value}
									onValueChange={onChange}
								/>
								{error?.message && <InlineError text={error?.message} />}
							</>
						)}
					/>
					<Controller
						control={control}
						name="name"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<CTextInput
									placeholder="Enter your name"
									value={value}
									onValueChange={onChange}
								/>
								{error?.message && <InlineError text={error?.message} />}
							</>
						)}
					/>
				</View>
				<CButton title="Continue" onClick={() => {}} />
			</View>
		</Linear>
	);
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		backgroundColor: "transparent",
		padding: 20,
		gap: 80,
	},
});
