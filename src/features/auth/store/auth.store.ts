import { create } from "zustand";
import type { RegisterUser, AuthStore } from '../schemas/index'


export const useAuthStore = create<AuthStore>((set) => ({
    user: null,

    token: null,

    login: (userLogin: RegisterUser) => set({ user: userLogin }),
    logout: () => set({ user: null })
}));