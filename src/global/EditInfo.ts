import Axios from "./Axios";
import { ReturnProps } from "../@types/others/function";

interface ArgsProps {
    firstName: String,
    lastName: String,
    phone: Number | null,
    email: String,
    note: String
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(
    data:ArgsProps, 
    infoType: ("refferal" | "approved-quote" | "client"), 
    identifier:String, ownerID: String, file:any
):Promise<ReturnProps> {
    const requestData = new FormData();
    requestData.append("infoType", infoType)
    requestData.append("ownerID", ownerID as string)
    requestData.append("firstName", data.firstName as string)
    requestData.append("lastName", data.lastName as string)
    requestData.append("phone", data.phone + "")
    requestData.append("email", data.email as string)
    requestData.append("note", data.note as string)
    requestData.append("file", file)
    if(infoType === "refferal" || infoType === "approved-quote") 
        requestData.append("id", identifier as string)
    else if(infoType === "client") 
        requestData.append("clientEmail", identifier as string)
    try {
        const req = await Axios.post("/info/edit", requestData);
        const res = await req.data;
        return {
            success: true,
            data: res
        }
    } catch(err) {
        return {
            success: false,
            error: err.response?.data.error
        }
    }
    
}
