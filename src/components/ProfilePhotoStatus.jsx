import { useSelector } from "react-redux";

function ProfilePhotoStatus() {

  const user=useSelector(state => state.auth.userDetails);
  console.log("user",user);
    return ( 
        <>
                <div className="text-center p-4 border-bottom">
      <div className="mb-4">
        <img
          src={user.photo}
          className="rounded-circle avatar-lg img-thumbnail"
          alt=""
        />
      </div>
      <h5 className="font-size-16 mb-1 text-truncate">{user.name+" "+user.surname}</h5>
      <p className="text-muted text-truncate mb-1">
        <i className="ri-record-circle-fill font-size-10 text-success me-1 ms-0 d-inline-block" />{" "}
        Active
      </p>
    </div>
        </>
     );
}

export default ProfilePhotoStatus;