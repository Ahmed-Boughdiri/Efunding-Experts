import Axios from "./Axios";
import { storeToken } from "../util/other/Token";

interface ReturnProps {
    email?: String,
    firstName?: String,
    lastName?: String,
    token?: String,
    error?: String,
    success: Boolean,
    _id?: String
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(email: String, password: String):Promise<ReturnProps> {
    try {
        const req = await Axios.post("/login", { email, password });
        const res = await req.data;
        storeToken(res.token);
        return {
            success: true,
            ...res
        }
    } catch(err) {
        return {
            success: false,
            error: err.response?.data.error ||
            "An Error Has Occured, Please Check Your Internet Connection and Try Again",
        }
    }
}
