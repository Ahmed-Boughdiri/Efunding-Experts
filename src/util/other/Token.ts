
export function storeToken(token:String):void {
    localStorage.setItem("EFUNDING_EXPERTS_USER_TOKEN", token as string);
}

export function getToken() {
    const token = localStorage.getItem("EFUNDING_EXPERTS_USER_TOKEN");
    return token;
}

export function removeToken() {
    localStorage.removeItem("EFUNDING_EXPERTS_USER_TOKEN");
}
