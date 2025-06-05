interface User {
	name: string;
	password: string;
}

interface AuthProviderType {
	user: User | undefined;
	setUser: (user: User) => void;
	logout: () => void;
}

interface TextInputProps {
	value: string;
	label?: string;
	placeholder: string;
	readonly?: boolean;
	keyboardType?: KeyboardTypeOptions;
	onValueChange: (text: string) => void;
}

interface ButtonProps {
	title: string;
	onClick: () => void;
	ghost?: boolean;
}

type LoginSwitch = "phone" | "email";
