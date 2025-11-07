import { create } from "zustand";
import type { registerUser, AuthStore } from "../schemas";


export const useAuthStore = create<AuthStore>(() => ({
    user: null,

    token: null,

    login: () => {
        //
    },

    logout: () => {
        //
    }
}));