import { useSelector, useDispatch } from "react-redux";
import {  useRef } from "react";
import { changeUserStatus,changeProfilePicture } from "../storeslices/authSlice";
import AuthService from "../services/AuthService";


function SettingsProfilePictureStatus() {

  const user=useSelector(state => state.auth.userDetails);
  const userStatus=useSelector(state => state.auth.userStatus);
  const dispatch=useDispatch();
  const imageRef=useRef();

function changeUserStatusFromComponent(status) {
  dispatch(changeUserStatus(status));
} 

function openImageBrowser(event) {
  imageRef.current.click();
}

async function handleImageUpload(event) {

  var Photo=event.target.files[0]
  var UserId=user.id;

  const result=await AuthService.ChangeProfilePicture({
    UserId:UserId,
    Photo:Photo
  });

  dispatch(changeProfilePicture(result.Data));
}

    return ( <>
        <div className="px-4 pt-4">
      <h4 className="mb-0">Settings</h4>
    </div>
    <div className="text-center border-bottom p-4">
      <div className="mb-4 profile-user">
        <img
          src={user.photo}
          className="rounded-circle avatar-lg img-thumbnail"
          alt=""
        />
        <button
        onClick={(event)=> openImageBrowser(event)}
          type="button"
          className="btn btn-light bg-light avatar-xs p-0 rounded-circle profile-photo-edit"
        >
          <i className="ri-pencil-fill" />
          <input ref={imageRef} type="file"style={{ display: 'none' }} accept="image/*" onChange={(event)=> handleImageUpload(event)}/>
        </button>
      </div>
      <h5 className="font-size-16 mb-1 text-truncate">{user.name+" "+user.surname}</h5>
      <div className="dropdown d-inline-block mb-1">
        <a
          className="text-muted dropdown-toggle pb-1 d-block"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {userStatus} <i className="mdi mdi-chevron-down" />
        </a>
        <div className="dropdown-menu">
          <a onClick={event => changeUserStatusFromComponent("Available")} className="dropdown-item" href="#">
            Available
          </a>
          <a onClick={event => changeUserStatusFromComponent("Busy")} className="dropdown-item" href="#">
            Busy
          </a>
        </div>
      </div>
    </div>
    </> );
}

export default SettingsProfilePictureStatus;