import { useUserStore } from "../store/userStore";

export const isLoggedIn = (): boolean => {
    const { user, accessToken } = useUserStore.getState();
    const sessionToken = sessionStorage.getItem("token");

    return !!((user && accessToken ) || sessionToken);
};
