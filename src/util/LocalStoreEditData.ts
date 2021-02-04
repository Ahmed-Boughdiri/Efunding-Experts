
interface DataProps {
    FirstName: String | undefined;
    LastName: String | undefined;
    ApproxQuoteAmount: String | undefined;
    FundingAmountSoFar: String | undefined;
    TotalCommissions: String | undefined;
    CommissionsCollected: String | undefined;
    Email: String | undefined;
    Phone: String | undefined;
    Note: String | undefined;
}

export function localStoreEditData(data:DataProps) {
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_FIRST_NAME", data.FirstName as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_LAST_NAME", data.LastName as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_APPROX_QUOTE_AMOUNT", data.ApproxQuoteAmount as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_FUNDING_AMOUNT_SO_FAR", data.FundingAmountSoFar as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_TOTAL_COMMISION", data.TotalCommissions as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_COMMISION_COLLECTED", data.CommissionsCollected as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_EMAIL", data.Email as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_PHONE", data.Phone + "" as string)
    localStorage.setItem("EFUNDING_EXPERTS_EDIT_NOTE", data.Note as string)
}

interface getEditDataProps {
    FirstName: String | null;
    LastName: String | null;
    ApproxQuoteAmount: String | null;
    FundingAmountSoFar: String | null;
    TotalCommissions: String | null;
    CommissionsCollected: String | null;
    Email: String | null;
    Phone: String | null;
    Note: String | null;
}

export function getEditData():getEditDataProps {
    return {
        FirstName: localStorage.getItem("EFUNDING_EXPERTS_EDIT_FIRST_NAME"),
        LastName: localStorage.getItem("EFUNDING_EXPERTS_EDIT_LAST_NAME"),
        ApproxQuoteAmount: localStorage.getItem("EFUNDING_EXPERTS_EDIT_APPROX_QUOTE_AMOUNT"),
        FundingAmountSoFar: localStorage.getItem("EFUNDING_EXPERTS_EDIT_FUNDING_AMOUNT_SO_FAR"),
        TotalCommissions: localStorage.getItem("EFUNDING_EXPERTS_EDIT_TOTAL_COMMISION"),
        CommissionsCollected: localStorage.getItem("EFUNDING_EXPERTS_EDIT_COMMISION_COLLECTED"),
        Email: localStorage.getItem("EFUNDING_EXPERTS_EDIT_EMAIL"),
        Phone: localStorage.getItem("EFUNDING_EXPERTS_EDIT_PHONE"),
        Note: localStorage.getItem("EFUNDING_EXPERTS_EDIT_NOTE")
    }
}
