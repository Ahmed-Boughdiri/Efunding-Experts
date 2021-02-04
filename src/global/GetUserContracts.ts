import Axios from "./Axios";
import { ReturnProps } from "../@types/others/function";
import { ContractsProps } from "../@types/others/contract";

export async function getUserContracts(ownerID: String):Promise<ReturnProps> {
    if(!ownerID) return {
        success: false,
        error: "An Error Has Occured Please Try Again"
    }
    try {
        const req = await Axios.post("/user/contracts/get",{ ownerID });
        const res:ContractsProps[] = await req.data;
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

export function getContractsAndApplications(arr:ContractsProps[]):ContractsProps[] {
    return arr.filter(item => item.contractType === "Contracts and Applications")
}

export function getOtherApplications(arr:ContractsProps[]):ContractsProps[] {
    return arr.filter(item =>item.contractType === "Other Applications")
}

export function getOtherForms(arr:ContractsProps[]):ContractsProps[] {
    return arr.filter(item =>item.contractType === "Other Forms")
}
