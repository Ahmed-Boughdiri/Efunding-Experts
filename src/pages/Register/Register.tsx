import React,{ useState } from "react";
import "../../layout/Register.css";
import { Form, Row, Col, Card, Container, Button, Image, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Input from "./Input";
import inputsData from "./InputsData";
import { register } from "../../global/Register";
import { validateData } from "../../util/Auth/RegisterValidateData";
import { NewUserDataProps } from "../../@types/Auth/Register";
import Loading from "../../components/Loading";

interface NewUserProps {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number | undefined,
    password: String,
    streetAdress: String,
    city: String,
    state: String,
    postal: Number | undefined,
    HowMuchFundingCanYouLaveragePerMonth: Number | undefined,
    occupation?: String,
    HowDidYouHearAboutUs?: String,
    AreYouCurrentlyHelpingClientsWithHighScoresObtainFunding?: Boolean,
    HaveYouExcellentHighClientsToReferNow?: Boolean,
    confirm: String
}

const Register:React.FC<any> = ({ history }) =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState<Number|undefined>(undefined)
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [postal, setPostal] = useState<Number|undefined>(undefined)
    const [occupation, setOccupation] = useState("")
    const [helpingHighScoreClients, setHelpingHighScoreClients] = useState<Boolean| undefined>(undefined)
    const [fundingPerMonth, setFundingPerMonth] = useState<Number|undefined>(undefined)
    const [haveExcellentClients, setHaveExcellentClients] = useState<Boolean|undefined>(undefined)
    const [hearAboutUs, setHearAboutUs] = useState("")
    const [streetAdress, setStreetAdress] = useState("")
    const [showError, setShowError] = useState(false)
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false)
    const states = [firstName, lastName, phoneNumber, email, password, confirm, streetAdress, city, state, postal, occupation, hearAboutUs, helpingHighScoreClients, fundingPerMonth, haveExcellentClients];
    const controllers = [
        (e:any) => setFirstName(e.target.value),
        (e:any) => setLastName(e.target.value),
        (e:any) => setPhoneNumber(e.target.value),
        (e:any) => setEmail(e.target.value),
        (e:any) => setPassword(e.target.value),
        (e:any) => setConfirm(e.target.value),
        (e:any) => setStreetAdress(e.target.value),
        (e:any) => setCity(e.target.value),
        (e:any) => setState(e.target.value),
        (e:any) => setPostal(e.target.value),
        (e:any) => setOccupation(e.target.value),
        (e:any) => setHearAboutUs(e.target.value),
        (e:any) => setHelpingHighScoreClients(e.target.id === "1"),
        (e:any) => setFundingPerMonth(e.target.value),
        (e:any) => setHaveExcellentClients(e.target.id === "1"),
    ]
    const submit = async() =>{
        setLoader(true);
        const newUser:NewUserDataProps = {
            firstName,
            lastName,
            email,
            password,
            state,
            postal,
            city,
            streetAdress,
            phoneNumber,
            HowMuchFundingCanYouLaveragePerMonth: fundingPerMonth,
            confirm,
        }
        if(occupation) newUser.occupation = occupation
        if(hearAboutUs) newUser.HowDidYouHearAboutUs = hearAboutUs;
        if(helpingHighScoreClients) newUser.AreYouCurrentlyHelpingClientsWithHighScoresObtainFunding = helpingHighScoreClients
        if(haveExcellentClients) newUser.HaveYouExcellentHighClientsToReferNow = haveExcellentClients
        const userError = validateData(newUser);
        if(userError) {
            setLoader(false)
            setError(userError.error!)
            setShowError(true)
            const scroll = window.pageYOffset;
            window.scrollTo(0,scroll+100)
        } else {
            const res = await register(newUser);
            if(!res.success) {
                setLoader(false)
                setError(res?.error as string);
                setShowError(true)
                const scroll = window.pageYOffset;
                window.scrollTo(0,scroll+100)
            } else {
                setLoader(false)
                history.push("/request");
            }
        }
    }
    return (
        <div className="register">
            <Card className="register-form mt-3 pt-5">
                <Card.Body>
                    <Container>
                        <div className="logo-container">
                            <Image src={logo} height={60} className="mb-5 d-flex" />
                        </div>
                        <h1 className="text-left register-title">Partners</h1>
                        <h4 className="register-desc">
                            Our Partner program is flexible to fit your needs.
                            Contact us today to discuss how to put us to work for your clients.
                        </h4>
                        <h5 className="mt-5 highlights">
                            Highlights of our ISO program are as follows:
                        </h5>
                        <ul>
                            <li><h5 className="char">Highest payout in the industry</h5></li>
                            <li><h5 className="char">Funding in form of installments loans. Linesof credit and credit cards. Monthly payment with longer terms.</h5></li>
                            <li><h5 className="char">Funding quotes returned in 2 hours.(if submitted by 1pm EST,back to you by 3pm)</h5></li>
                            <li><h5 className="char">Commisions paid every Friday</h5></li>
                            <li><h5 className="char">Experienced processors with over 8 years experience doing 1,000 of apps per month.</h5></li>
                            <li><h5 className="char">White label options and volume discounts.</h5></li>
                        </ul>
                        <Form className="mt-5 pb-3">
                            {
                                inputsData.map((input, index) => <Input label={input.label} required={input.required} type={input.type} placeholder={input.placeholder} states={states} controllers={controllers} index={index} />)
                            }
                        </Form>
                    </Container>
                </Card.Body>
                {/* Register & Login Buttons */}
                    <Card.Footer>
                        <Container>
                            <Row>
                                <Col md={6} sm={12}>
                                    <Link to="/">
                                        <Button variant="light" className="login-button">
                                            <h6>Already Register? Login</h6>
                                        </Button>
                                    </Link>
                                </Col>
                                <Col md={6} sm={12}>
                                    <Button variant="primary" className="float-right register-button" onClick={submit}>
                                        <h6>Register</h6>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Footer>
            </Card>
            {
                showError && (
                    <Alert variant="danger" className="mt-3 alert-container" dismissible onClose={() =>setShowError(false)}>
                        { error }
                    </Alert>
                )
            }
            {
                loader && <Loading />
            }
        </div>
    )
}

export default Register;
