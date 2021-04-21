import Axios from "./Axios";
import { ReturnProps } from "../@types/others/function";

export default async function(email: String): Promise<ReturnProps> {
    if(!email) return {
        success: false,
        error: "Email Needs To Be Provided"
    }
    try {
        const req = await Axios.post("/user/password/reset", { email });
        const res = await req.data;
        return {
            success: true,
            data: res
        }
    } catch(err) {
        return {
            success: false,
            error: err.response?.data?.error ||
                "An Error Has Occured Please Check Your Internet Connection And Try Again"
        }
    }
}
