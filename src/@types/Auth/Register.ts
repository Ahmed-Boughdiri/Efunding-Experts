
export interface ReturnProps {
    success: Boolean,
    error?: String,
    email?: String,
    firstName?: String,
    lastName?: String,
    token?: String,
}

export interface NewUserDataProps {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number | undefined,
    password: String,
    state: String,
    city: String,
    streetAdress: String,
    postal: Number | undefined,
    HowMuchFundingCanYouLaveragePerMonth: Number | undefined,
    occupation?: String,
    HowDidYouHearAboutUs?: String,
    AreYouCurrentlyHelpingClientsWithHighScoresObtainFunding?: Boolean,
    HaveYouExcellentHighClientsToReferNow?: Boolean,
    confirm?: String
}
