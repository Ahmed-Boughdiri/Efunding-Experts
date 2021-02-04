import Axios from "./Axios";
import { ReturnProps } from "../@types/others/function";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(id:String):Promise<ReturnProps> {
    if(!id) return {
        success: false,
        error: "An Error Has Occured Please Try Again Later"
    }
    try {
        const req = await Axios.post("/user/get/recent/clients", { id })
        const res = await req.data
        return {
            success: true,
            data: res
        }
    } catch(err) {
        return {
            success: false,
            error: err.response?.data.error ||
                "An Error Has Occured Please Try Again Later"
        }
    }
}
