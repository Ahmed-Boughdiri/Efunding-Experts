import Axios from "./Axios";
import { ReturnProps, NewUserDataProps } from "../@types/Auth/Register";

function extractNewUserData(user: NewUserDataProps): NewUserDataProps {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    password: user.password,
    state: user.state,
    city: user.city,
    streetAdress: user.streetAdress,
    postal: user.postal,
    HowMuchFundingCanYouLaveragePerMonth:
      user.HowMuchFundingCanYouLaveragePerMonth,
    occupation: user.occupation ? user.occupation : undefined,
    HowDidYouHearAboutUs: user.HowDidYouHearAboutUs
      ? user.HowDidYouHearAboutUs
      : undefined,
    AreYouCurrentlyHelpingClientsWithHighScoresObtainFunding: user.AreYouCurrentlyHelpingClientsWithHighScoresObtainFunding
      ? user.AreYouCurrentlyHelpingClientsWithHighScoresObtainFunding
      : undefined,
    HaveYouExcellentHighClientsToReferNow: user.HaveYouExcellentHighClientsToReferNow
      ? user.HaveYouExcellentHighClientsToReferNow
      : undefined,
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export async function register(
  newUser: NewUserDataProps
): Promise<ReturnProps> {
  try {
    const newUserData = extractNewUserData(newUser);
    const req = await Axios.post("/register", { ...newUserData });
    if (req.status === 400) {
      return {
        success: false,
        error: req.data.error,
      };
    }
    const res = await req.data;
    if (res.error) {
      return {
        success: false,
        error: res.error,
      };
    }
    return {
      success: true,
      ...res,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error.response?.data.error ||
        "An Error Has Occured, Please Check Your Internet Connection and Try Again",
    };
  }
}
