import { router, useSegments } from "expo-router";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

function useProtectedRoute(user: User | undefined) {
	const segments = useSegments();
	useEffect(() => {
		const inAuthGroup =
			segments.length > 0 && segments[0]?.startsWith("(auth)");

		router.replace("/login");
	}, []);
}

export const AuthContext = createContext<AuthProviderType>({
	user: undefined,
	setUser: () => {},
	logout: () => {},
});

export function useAuth() {
	if (!useContext(AuthContext)) {
		throw new Error("useAuth must be used within a <AuthProvider />");
	}

	return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | undefined>(undefined); //todo: get user from storage MMKV

	function logout() {
		setUser(undefined);
	}

	useProtectedRoute(user);

	const value = {
		user,
		setUser,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
