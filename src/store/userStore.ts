import { create } from "zustand";

type User = {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    username: string;
    email: string;
    role: string;
    is_active: boolean;
    is_email_verified: boolean;
};

type UserStore = {
    isLoggedIn: boolean;
    user: User | null;
    accessToken: string | null;
    setUser: (user: User, accessToken: string, isLoggedIn:boolean) => void;
    clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
    isLoggedIn: false,
    user: null,
    accessToken: null,

    setUser: (user, accessToken, isLoggedIn) =>
        set({ user, accessToken, isLoggedIn}),

    clearUser: () => {
        sessionStorage.removeItem("token"); // remove from session
        set({ user: null, accessToken: null, isLoggedIn: false });
    },
}));

