import { useSelector } from "react-redux";
import FileData from "./FileData";
function ProfileData() {

  const user=useSelector(state => state.auth.userDetails);

    return ( 
        <>
         <div className="simplebar-content" style={{ padding: 24 }}>
                <div className="text-muted">
                  <p className="mb-4">
                    If several languages coalesce, the grammar of the resulting
                    language is more simple and regular than that of the
                    individual.
                  </p>
                </div>
                <div id="tabprofile" className="accordion">
                  <div className="accordion-item card border mb-2">
                    <div className="accordion-header" id="about2">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#about"
                        aria-expanded="true"
                        aria-controls="about"
                      >
                        <h5 className="font-size-14 m-0">
                          <i className="ri-user-2-line me-2 ms-0 ms-0 align-middle d-inline-block" />{" "}
                          About
                        </h5>
                      </button>
                    </div>
                    <div
                      id="about"
                      className="accordion-collapse collapse show"
                      aria-labelledby="about2"
                      data-bs-parent="#tabprofile"
                    >
                      <div className="accordion-body">
                        <div>
                          <p className="text-muted mb-1">Name</p>
                          <h5 className="font-size-14">{user.name}</h5>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted mb-1">Email</p>
                          <h5 className="font-size-14">{user.email}</h5>
                        </div>
                        <div className="mt-4">
                          <p className="text-muted mb-1">Logged in Time</p>
                          <h5 className="font-size-14">{new Date().toLocaleString()}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End About card */}
                  <div className="card accordion-item border">
                    <div className="accordion-header" id="attachfile2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#attachfile"
                        aria-expanded="false"
                        aria-controls="attachfile"
                      >
                        <h5 className="font-size-14 m-0">
                          <i className="ri-attachment-line me-2 ms-0 ms-0 align-middle d-inline-block" />{" "}
                          Attached Files
                        </h5>
                      </button>
                    </div>
                    <div
                      id="attachfile"
                      className="accordion-collapse collapse"
                      aria-labelledby="attachfile2"
                      data-bs-parent="#tabprofile"
                    >
                      <div className="accordion-body">        
                        <FileData />                     
                      </div>
                    </div>
                  </div>
                  {/* End Attached Files card */}
                </div>
                {/* end profile-user-accordion */}
              </div>
        </>
     );
}

export default ProfileData;