interface User {
	name: string;
	password: string;
}

interface AuthProviderType {
	user: User | undefined;
	setUser: (user: User) => void;
	logout: () => void;
}
