export const setSession = (key:string, value:string) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key:string) => {
    const item = sessionStorage.getItem(key);
    try {
        return item ? JSON.parse(item) : null;
    } catch {
        return item;
    }
};

export const removeSession = (key:string) => {
    sessionStorage.removeItem(key);
};
