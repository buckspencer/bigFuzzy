import { BASE_URL } from "../utils";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = (set, addUser) => ({
	userProfile: null,
	allUsers: [],

	addUser: (user) => set({ userProfile: user }),
	removeUser: () => set({ userProfile: null }),
	fetchAllUsers: async () => {
		const response = await axios.get(`/api/users`);

		set({ allUsers: response.data });
	},
});

const useAuthStore = create(
	persist(authStore, {
		name: "auth",
	})
);

export default useAuthStore;
