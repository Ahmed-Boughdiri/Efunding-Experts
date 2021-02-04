
export function storeID(id: String) {
    localStorage.setItem("EFUNDING_EXPERTS_USER_ID", id as string);
    return id;
}

export function getID() {
    const result = localStorage.getItem("EFUNDING_EXPERTS_USER_ID");
    return result
}
