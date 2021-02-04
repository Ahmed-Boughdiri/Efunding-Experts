import Axios from "./Axios";
import { getToken } from "../util/other/Token";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function() {
    const token = getToken();
    if(!token) return {
        success: false,
        isLogged: false
    }
    try {
        const req = await Axios.post("/login/token", { token });
        const res = await req.data;
        return {
            success: true,
            isLogged: true,
            data: res
        }
    } catch(err) {
        if(err.response.data.error === "Access Token is Not Valid") return {
            success: false,
            isLogged: false
        }
        return {
            success: false,
            isLogged: false,
            error: err.response.data.error
        }
    }
}

