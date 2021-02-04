import Axios from "./Axios";
import { ReturnProps } from "../@types/others/function";

export async function getQuotes(id: String):Promise<ReturnProps> {
  if(!id) return {
    success: false,
    error: "An Error Has Occured Please Try Again"
  }
  try {
    const req = await Axios.post("/quotes/get", { id });
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
