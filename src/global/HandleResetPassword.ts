import Axios from "./Axios";
import { ReturnProps } from "../@types/others/function";

export default async function(password: String, userID: String): Promise<ReturnProps> {
    if(!password) return {
        success: false,
        error: "Password Needs To Be Provided"
    }
    if(password.length < 8) return {
        success: false,
        error: "Password Must Be At Least 8 Long Charecters"
    }
    try {
        const req = await Axios.post("/user/password/reset/process", { userID, password });
        const res = await req.data;
        return {
            success: true,
            data: res
        }
    } catch(err) {
        return {
            success: false,
            error: err.response?.data.error ||
                "An Error Has Occured Please Check Your Internet Connection And Try Again"
        }
    }
}

