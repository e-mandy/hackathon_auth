import { create } from "zustand";
import type { AuthStore } from "../schemas";


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