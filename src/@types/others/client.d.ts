import { NotesProps } from "../data/data";

export interface ClientProps {
    Adress: String,
    ApproxQuoteAmount: Number,
    City: String,
    CommissionsCollected: Number,
    DateCreated: String,
    DesiredAmountOfFunding: String,
    DoTheyAlreadyHaveABusiness: String,
    Email: String
    FirstName: String,
    Income: Number
    LastName: String,
    Notes: NotesProps[],
    Phone: Number,
    State: String,
    Status: String,
    TotalCommissions: Number,
    WhatsMainPurposeOfFund: String,
    Zip: String,
    nameOfTheBusiness: String,
    _id: String,
}
