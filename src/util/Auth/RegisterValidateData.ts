
export function validateData(newUser: any) {
    // eslint-disable-next-line no-control-regex
    const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if(!newUser.firstName) {
        return {
            error: "First Name Must Be Provided"
        }
    } else if(!newUser.lastName) {
        return {
            error :"Last Name Must Be Provided"
        }
    } else if(!newUser.phoneNumber) {
        return {
            error: "Phone Number Must Be Provided"
        }
    } else if(!newUser.email) {
        return {
            error: "Email Must Be Provided"
        }
    } else if(!newUser.email.match(emailPattern)) {
        return {
            error: "Your Email Adress In Invalid"
        }
    } 
    else if(!newUser.password) {
        return {
            error: "Password Must Be Provided"
        }
    } else if(newUser.password.length < 8) {
        return {
            error: "Your Password Need To Be At Least 8 Characters"
        }
    } 
    else if(newUser.password !== newUser.confirm) {
        return {
            error: "Password And Confirm Password Does Not Match"
        }
    } else if(!newUser.state) {
        return {
            error: "State Must Be Provided"
        }
    } else if(!newUser.postal) {
        return {
            error: "Postal Must Be Provided"
        }
    } else if(!newUser.city) {
        return {
            error: "City Must Be Provided"
        }
    } else if(!newUser.confirm) {
        return {
            error: "You Need To Confirm Your Email"
        }
    } else if(!newUser.streetAdress) {
        return {
            error: "Street Adress Must Be Provided"
        }
    } else if(!newUser.HowMuchFundingCanYouLaveragePerMonth) {
        return {
            error: "Funding Per Month Must Be Provided"
        }
    }
    return false
}
