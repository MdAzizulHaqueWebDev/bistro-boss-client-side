/** @format */

import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";
import { baseURL } from "../hooks/useAxiosInstance";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// create user by email pass
	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);
	// login by email pass
	const loginByEmailPass = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	// login by google
	const loginByGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
	// login by github
	const loginByGithub = () => signInWithPopup(auth, new GithubAuthProvider());
	// updateUserProfile
	const updateUserProfile = (name, photo) =>
		updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	useEffect(() => {
		const clearUser = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			const email = {
				email: currentUser?.email || user?.email,
			};
			if (currentUser) {
				axios.post(`${baseURL}/jwt`, email).then((res) => {
					if (res.data?.token) {
						localStorage.setItem("access-token", res.data.token);
					}
				});
			} else {
				localStorage.removeItem("access-token");
			}
		});
		return () => {
			clearUser();
		};
	}, []);
	const logOut = () => signOut(auth);
	const authInfo = {
		user,
		loading,
		createUser,
		loginByEmailPass,
		loginByGoogle,
		loginByGithub,
		updateUserProfile,
		logOut,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
