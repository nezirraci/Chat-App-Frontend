import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { changeUserDetails, resetState } from "../storeslices/authSlice";

function SettingsUserDetails() {

  const user=useSelector(state => state.auth.userDetails);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [Name,setName]=useState(user.name);
  const [Surname,setSurname]=useState(user.surname)
  const [Email,setEmail]=useState(user.email);
  const [CurrentPassword,setCurrentPassword]=useState();
  const [NewPassword,setNewPassword]=useState();
  const [errors,setValidationErrors]=useState([]);

  function showValidationErrors() {
    if(errors.length>0) {

      var validationErrors=  errors.map((error) => {
       return  <p className="text-muted mb-4">{error}</p>
      });


        return validationErrors;
    }
}

  async function EditUserData() {

    const editedUser= {
      Id:user.id,
      Name:Name,
      Surname:Surname,
      Email:Email,
    }
    
    var result=await AuthService.EditUser(editedUser);
    if(result.Succeded) {
      dispatch(changeUserDetails(result.Data));
      setValidationErrors([]);
    }
    else {
      setValidationErrors(result.Data);
    }

  }

  async function EditPassword() {
    const editedPassword = {
      UserId: user.id,
      CurrentPassword: CurrentPassword,
      NewPassword:NewPassword
    }

     var result=await AuthService.ChangePassword(editedPassword);
    console.log(result,"RESULT");
     if(result.Succeded) {
      dispatch(resetState());
      navigate('/Login');
     }
     else {

      setValidationErrors(result.Data);
     }
  }
  

    return (  <>
                  {
                      showValidationErrors()
                  }
                 <div id="settingprofile" className="accordion">
                  <div className="accordion-item card border mb-2">
                    <div className="accordion-header" id="personalinfo1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#personalinfo"
                        aria-expanded="true"
                        aria-controls="personalinfo"
                      >
                        <h5 className="font-size-14 m-0">Personal Info</h5>
                      </button>
                    </div>
                    <div
                      id="personalinfo"
                      className="accordion-collapse collapse"
                      aria-labelledby="personalinfo1"
                      data-bs-parent="#settingprofile"
                      style={{}}
                    >
                      <div className="accordion-body">
                        <div className="float-end">
                          <button
                            type="button"
                            onClick={(event)=> EditUserData()}
                            className="btn btn-light btn-sm"
                          >
                            <i className="ri-edit-fill me-1 ms-0 align-middle" />{" "}
                            Edit
                          </button>
                        </div>
                        <div>
                          <p className="text-muted mb-1">Name</p>
                          <input onInput={event => setName(event.target.value)} className="font-size-14" defaultValue={user.name}/>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted mb-1">Surname</p>
                          <input onInput={event => setSurname(event.target.value)} className="font-size-14" defaultValue={user.surname}/>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted mb-1">Email</p>
                          <input onInput={event => setEmail(event.target.value)} className="font-size-14" defaultValue={user.email}/>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted mb-1">Logged in Time</p>
                          <h5 className="font-size-14">{new Date().toLocaleString()}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card border mb-2">
                    <div className="accordion-header" id="personalinfo1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#personalinfo2"
                        aria-expanded="true"
                        aria-controls="personalinfo"
                      >
                        <h5 className="font-size-14 m-0">Change Password</h5>
                      </button>
                    </div>
                    <div
                      id="personalinfo2"
                      className="accordion-collapse collapse"
                      aria-labelledby="personalinfo1"
                      data-bs-parent="#settingprofile"
                      style={{}}
                    >
                      <div className="accordion-body">
                        <div className="float-end">
                          <button
                            type="button"
                            onClick={(event)=> EditPassword()}
                            className="btn btn-light btn-sm"
                          >
                            <i className="ri-edit-fill me-1 ms-0 align-middle" />{" "}
                            Edit
                          </button>
                        </div>
                        <div>
                          <p className="text-muted mb-1">Current Password</p>
                          <input type="password" onInput={event => setCurrentPassword(event.target.value)} className="font-size-14" defaultValue={""}/>
                        </div>
                        <div>
                          <p className="text-muted mb-1">New Password</p>
                          <input type="password" onInput={event => setNewPassword(event.target.value)} className="font-size-14" defaultValue={""}/>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  {/* end personal info card */}
                  
                </div>
    
            </>);
}

export default SettingsUserDetails;