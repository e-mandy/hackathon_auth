import { create } from "zustand";
import type { AuthStore, RegisterUser } from '../schemas/index';
import type { ApiResponse } from "../api/useRegister";


export const useAuthStore = create<AuthStore>((set) => ({
    user: null,

    token: null,

    login: (userLogin: ApiResponse) => set({ user: userLogin.user, token: userLogin.token }),
    logout: () => set({ user: null, token: null })
}));

export const useIsAuthenticated = create(() => ({
    isRegister: (userStore: RegisterUser | null) => {
        return (userStore === null) ? false : true;
    }
}))