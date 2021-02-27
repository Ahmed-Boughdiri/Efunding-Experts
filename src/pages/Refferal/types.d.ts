

export interface ControllersProps {
    DesiredAmountOfFunding: String|undefined;
    WhatsMainPurposeOfFund: String|undefined;
    DoTheyAlreadyHaveABusiness: String|undefined;
    nameOfTheBusiness: String|undefined;
    FirstName: String;
    LastName: String;
    Adress: String|undefined;
    City: String|undefined;
    State: String|undefined;
    Zip: Number|undefined;
    DOB: String|undefined;
    Phone: Number|undefined;
    Email: String;
    Income: String;
    Notes: String|undefined
}


export interface ActionsProps {
    setDesiredAmountOfFunding:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setWhatsMainPurposeOfFund:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setDoTheyAlreadyHaveABusiness:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setNameOfTheBusiness:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setFirstName:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setLastName:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setAdress:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setCity:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setState:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setZip:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setDOB:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setPhone:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setEmail:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setNotes:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setFile:
        (e:React.ChangeEvent<HTMLInputElement>) => void;
    setIncome: 
        (e:React.ChangeEvent<HTMLInputElement>) => void;
}
