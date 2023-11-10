import {useState} from 'react';
 import AuthService from '../../services/AuthService';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUserData,initiateSignalRConnection } from '../../storeslices/authSlice';

function LoginScreen()   {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [errors,setErrors]=useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate();

async function Login(event) {
    event.preventDefault();
    var result=await AuthService.login(username,password);

   if(result.Succeded) {
        dispatch(loadUserData(result));
        dispatch(initiateSignalRConnection());
        navigate("/Home");
   }
   else {
    setErrors(result.Data);
   }
}

function showValidationErrors() {
    if(errors.length>0) {

      var validationErrors=  errors.map((error) => {
       return  <p className="text-muted mb-4">{error}</p>
      });

        return validationErrors;
    }
}


    return <>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <a href="index.html" className="auth-logo mb-5 d-block">
                                <img src="./src/assets/images/logo-dark.png" alt="" height="30" className="logo logo-dark"/>
                                <img src="./src/assets/images/logo-light.png" alt="" height="30" className="logo logo-light"/>
                            </a>

                            <h4>Sign in</h4>
                            <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
                            {
                               showValidationErrors()
                            }
                            
                        </div>

                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="p-3">
                                        <form action="index.html">

                                            <div className="mb-3">
                                                <label className="form-label">Username</label>
                                                <div className="input-group mb-3 bg-light-subtle rounded-3">
                                                    <span className="input-group-text text-muted" id="basic-addon3">
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                    <input onInput={event =>setUsername(event.target.value)} type="text" className="form-control form-control-lg border-light bg-light-subtle" placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon3"></input>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="float-end">
                                                    <a href="auth-recoverpw.html" className="text-muted font-size-13">Forgot password?</a>
                                       s         </div>
                                                <label className="form-label">Password</label>
                                                <div className="input-group mb-3 bg-light-subtle rounded-3">
                                                    <span className="input-group-text text-muted" id="basic-addon4">
                                                        <i className="ri-lock-2-line"></i>
                                                    </span>
                                                    <input onInput={event =>setPassword(event.target.value)} type="password" className="form-control form-control-lg border-light bg-light-subtle" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon4"></input>

                                                </div>
                                            </div>

                                            <div className="form-check mb-4">
                                                <input type="checkbox" className="form-check-input" id="remember-check"></input>
                                                <label className="form-check-label">Remember me</label>
                                            </div>

                                            <div className="d-grid">
                                                <button onClick={event => Login(event)} className="btn btn-primary waves-effect waves-light" type="submit">Sign in</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <Link to='/Register'>
                            <div className="mt-5 text-center">
                                <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Signup now </a> </p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            </>

}

export default LoginScreen;