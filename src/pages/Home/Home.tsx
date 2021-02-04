import React,{ useState, useEffect } from "react";
import "../../layout/Home.css";
import Loader from "../../components/Loading";
import TokenLogin from "../../global/TokenLogin";
import { RouteComponentProps } from "react-router-dom";
import Error from "../../components/Error";

const Home:React.FC<RouteComponentProps> = ({ history }) =>{
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleRedirect = async() =>{
        const res = await TokenLogin();
        if(!res.success) {
            if(res.error) {
                setError(error);
                setShowError(true);
                setLoading(false)
            } else {
                setError("")
                setShowError(false)
                setLoading(false)
                history.push("/login");
            }
        } else {
            setLoading(false)
            history.push("/dashboard");
        }
    }
    useEffect(() =>{
        handleRedirect()
    },[])
    return (
        <div className="home-page">
            {
                loading && <Loader />
            }
            {
                showError && <Error error={error} />
            }
        </div>
    )
}

export default Home;

