import Axios from "./Axios";
import { ReturnProps } from "../@types/others/function";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(ownerID: String):Promise<ReturnProps> {
    if(!ownerID) return {
        success: false,
        error: "ID Not Provided"
    }
    try {
        const req = await Axios.post("/user/get/commision",{ ownerID });
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
