import Axios from "./Axios";
import { getToken } from "../util/other/Token";

interface ReturnProps {
    success: Boolean,
    error?: String,
    data?: unknown
}

interface RefferalProps {
    creditReport: Blob,
    DesiredAmountOfFunding: String,
    WhatsMainPurposeOfFund: String,
    DoTheyAlreadyHaveABusiness: String,
    FirstName: String,
    LastName: String,
    ownerID: String,
    nameOfTheBusiness: String,
    Adress: String,
    City: String,
    State: String,
    Zip: Number,
    DOB: String,
    Phone: Number,
    Email: String,
    Income: Number,
    Notes: String
}

export async function submitRefferal(refferal: RefferalProps):Promise<ReturnProps> {
    const fd = new FormData();
    if(refferal.creditReport) fd.append("file", refferal.creditReport);
    fd.append("DesiredAmountOfFunding", refferal.DesiredAmountOfFunding as string);
    fd.append("WhatsMainPurposeOfFund", refferal.WhatsMainPurposeOfFund as string);
    fd.append("DoTheyAlreadyHaveABusiness", refferal.DoTheyAlreadyHaveABusiness as string);
    fd.append("FirstName", refferal.FirstName as string);
    fd.append("LastName", refferal.LastName as string);
    fd.append("ownerID", refferal.ownerID as string);
    if(refferal.nameOfTheBusiness) fd.append("nameOfTheBusiness", refferal.nameOfTheBusiness as string);
    if(refferal.Adress) fd.append("Adress", refferal.Adress as string);
    if(refferal.City) fd.append("City", refferal.City as string);
    if(refferal.State) fd.append("State", refferal.State as string);
    if(refferal.Zip) fd.append("Zip", refferal.Zip + "");
    if(refferal.DOB) fd.append("DOB", refferal.DOB as string);
    if(refferal.Phone) fd.append("Phone", refferal.Phone + "");
    if(refferal.Email) fd.append("Email", refferal.Email as string);
    if(refferal.Income) fd.append("Income", refferal.Income + "");
    if(refferal.Notes) fd.append("Notes", refferal.Notes as string);
    const token = getToken();
    fd.append("token", token || "");
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    try {

        const req = await Axios.post("/quotes/add", fd, config)
        if(req.status === 400) return {
            success: false,
            error: req.data.error
        }
        const res = await req.data;
        return {
            success: true,
            data: {
                ...res
            }
        }
    } catch(err) {
        return {
            success: false,
            error: err.response?.data.error || "An Error Has Occured Please Check Your Internet Connection And Try Again"
        }
    }
}

interface ValidateRefferalDataProps {
    error?: String
}

export function validateRefferalData(data: RefferalProps):ValidateRefferalDataProps {
    if(!data.DesiredAmountOfFunding) return { error: "Desired Amount Of Funding Must Be Provided" }
    if(!data.WhatsMainPurposeOfFund) return { error: "Main Purpose Of Fund Must Be Provided" }
    if(!data.DoTheyAlreadyHaveABusiness) return { error: "Do They Already Have a Business Must Be Provided" }
    if(!data.FirstName) return { error: "First Name Must Be Provided" }
    if(!data.LastName) return { error: "Last Name Must Be Provided" }

    
    if(data.Email) {
        // eslint-disable-next-line no-control-regex
        const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if(!data.Email.match(emailPattern)) return { error: "Invalid Email Adress" }
    }

    if(data.DOB) {
        const birth = data.DOB.split("-");
        if(birth.length !== 3) return { error: "Invalid DOB" }
        try {
            if(+birth[2] > 2002 || +birth[2] < 1900)  return { error: "DOB Must Be After 2002" }
            if(+birth[0] > 12 || +birth[0] < 0)  return { error: "DOB Month Invalid" } 
            if(+birth[1] > 31 || +birth[1] < 0) return { error: "DOB Day Invalid" }
        } catch(err) {
            return { error: "Invalid DOB" }
        }
    }
    if(!data.Email) return {
        error: "Refferal Email Adress Needs To Be Provided"
    }

    return {}
}
