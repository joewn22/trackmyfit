import AuthNav from "@/components/clickable/auth-nav";
import CButton from "@/components/clickable/button";
import { CDOBInput } from "@/components/input/date";
import CDropdown from "@/components/input/dropdown";
import PhoneNumberInput from "@/components/input/phone-number";
import CTextInput from "@/components/input/text";
import InlineError from "@/components/label/inline-error";
import SignUpLayout from "@/components/layout/signup-layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";

export default function SignupIndex() {
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<string | number | null>(null);
	const [items, setItems] = useState([
		{ label: "Female", value: "female" },
		{ label: "Male", value: "male" },
		{ label: "Non-binary", value: "non-binary" },
		{ label: "Other", value: "other" },
	]);

	const formSchema = z.object({
		name: z.string().min(1, "Please select enter your name"),
		email: z.string().email("Please enter a valid email address").optional(),
		phone: z
			.string()
			.regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")
			.optional(),
		gender: z.string().min(1, "Please select a gender"),
		dob: z.date(),
	});

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(formSchema),
	});

	return (
		<SignUpLayout header="Tell us about you">
			<View className="flex flex-col justify-between h-[85%]">
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
						name="phone"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<PhoneNumberInput value={value} onValueChange={onChange} />
								{error?.message && <InlineError text={error?.message} />}
							</>
						)}
					/>
					<Controller
						control={control}
						name="gender"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<CDropdown
									open={open}
									value={value}
									items={items}
									setOpen={() => setOpen(!open)}
									setValue={onChange}
									placeholder={"Select your gender"}
								/>
								{error?.message && <InlineError text={error?.message} />}
							</>
						)}
					/>
					<Controller
						control={control}
						name="dob"
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<CDOBInput
									date={value}
									setDate={onChange}
									placeholder="Select your birth date"
								/>
								{error?.message && <InlineError text={error?.message} />}
							</>
						)}
					/>
				</View>
				<View className="w-full justify-center items-center gap-2">
					<CButton
						title="Create account"
						onClick={() => {
							router.push("/(auth)/signup/otp");
						}}
					/>
					<AuthNav
						navlabel="Go back"
						question="Don’t want to sign up anymore?"
						onClick={() => router.back()}
					/>
				</View>
			</View>
		</SignUpLayout>
	);
}
