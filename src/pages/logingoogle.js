import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "69631142048-0gr1ltain1vtbe6r6cl6jmrr6r1q173q.apps.googleusercontent.com";

function Login() {

    let navigate = useNavigate();

    const onSuccess = (res) => {
        console.log("LOGIN SUCCES!", res.profileObj);
        navigate(`/home`);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    } 

    
    return (
        
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Google | Giriş Yap"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}
export default Login;