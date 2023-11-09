import { useState } from "react";
import AuthService from "../../services/AuthService";
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUserData } from '../../storeslices/authSlice';



function RegisterScreen()  {

    const [Name,setName]=useState("");
    const [Surname,setSurname]=useState("");
    const [Email, setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [Photo,setPhoto]=useState("");
    const [PhotoFile,setPhotoFile]=useState();
    const [errors,setValidationErrors]=useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate();
  
async function Register(event) {
    event.preventDefault();

 const user= {
    Name:Name,
    Surname:Surname,
    Email:Email,
    Photo:Photo,
    Password:Password,
    File:PhotoFile
 }

   var result= await AuthService.Register(user);
   console.log('Result',result);

   if(result.Succeded) {
    dispatch(loadUserData(result));
    navigate("/Home");
    }   
    else {
    setValidationErrors(result.Data);
    }
}

async function getPhotoFile(event) {
   var file=event.target.files[0];
    setPhotoFile(file);
    setPhoto(file.name);
}

function showValidationErrors() {
    if(errors.length>0) {

      var validationErrors=  errors.map((error) => {
       return  <p className="text-muted mb-4">{error}</p>
      });


        return validationErrors;
    }
}

    return ( <>
                <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center mb-4">
                            <a href="index.html" className="auth-logo mb-5 d-block">
                                <img src="./src/assets/images/logo-dark.png" alt="" height="30" className="logo logo-dark"/>
                                <img src="./src/assets/images/logo-light.png" alt="" height="30" className="logo logo-light"/>
                            </a>

                            <h4>Sign up</h4>
                            <p className="text-muted mb-4">Get your Chatvia account now.</p>
                            {
                                showValidationErrors()
                            }
                        </div>
                           
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="p-3">
                                    <form action="index.html">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <div className="input-group bg-light-subtle rounded-3  mb-3">
                                                <span className="input-group-text text-muted" id="basic-addon5">
                                                    <i className="ri-mail-line"></i>
                                                </span>
                                                <input onInput={event =>setEmail(event.target.value)} type="email" className="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon5"/>
                                                
                                            </div>
                                        </div>
    
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon6">
                                                    <i className="ri-user-2-line"></i>
                                                </span>
                                                <input onInput={event =>setName(event.target.value)} type="text" className="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon6"/>
                                                
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Surname</label>
                                            <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon6">
                                                    <i className="ri-user-2-line"></i>
                                                </span>
                                                <input onInput={event => setSurname(event.target.value)} type="text" className="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon6"/>
                                                
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Password</label>
                                            <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon7">
                                                    <i className="ri-lock-2-line"></i>
                                                </span>
                                                <input onInput={event =>setPassword(event.target.value)} type="password" className="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon7"/>
                                                
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Photo</label>
                                            <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                <span className="input-group-text border-light text-muted" id="basic-addon7">
                                                    <i className="ri-lock-2-line"></i>
                                                </span>
                                                <input onChange={event => getPhotoFile(event)} onInput={event =>setPhoto(event.target.value)} type="file" className="form-control form-control-lg bg-light-subtle border-light" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon7"/>
                                                
                                            </div>
                                        </div>


                                        <div className="d-grid">
                                            <button onClick={event => Register(event)} className="btn btn-primary waves-effect waves-light" >Sign up</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="text-muted mb-0">By registering you agree to the Chatvia <a href="#" className="text-primary">Terms of Use</a></p>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <Link to='/Login'>
                            <p>Already have an account ? <a href="auth-login.html" className="fw-medium text-primary"> Signin </a> </p>
                            </Link>
                            <p>© <script>document.write(new Date().getFullYear())</script> Chatvia. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            </> );
}
 
export default RegisterScreen;