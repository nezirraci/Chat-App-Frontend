import { forwardRef } from "react";



const  ChatRoomUserProfileSideBar = forwardRef(function ChatRoomUserProfileSideBar(props,ref) {
  const Contact=props.Contact;

  function CloseSideBar() {
    ref.current.style.display="none";
  }
    return ( <>
            <div ref={ref} className="user-profile-sidebar show" style={{display:'none'}}>
      <div className="px-3 px-lg-4 pt-3 pt-lg-4">
        <div className="user-chat-nav text-end">
          <button onClick={(event)=> CloseSideBar()} type="button" className="btn nav-btn" id="user-profile-hide">
            <i className="ri-close-line" />
          </button>
        </div>
      </div>
      <div className="text-center p-4 border-bottom">
        <div className="mb-4">
          <img
            src={Contact.photo}
            className="rounded-circle avatar-lg img-thumbnail"
            alt=""
          />
        </div>
        <h5 className="font-size-16 mb-1 text-truncate">{Contact.name+" "+Contact.surname}</h5>
        <p className="text-muted text-truncate mb-1">
          <i className="ri-record-circle-fill font-size-10 text-success me-1 ms-0" />{" "}
          Active
        </p>
      </div>
      {/* End profile user */}
      {/* Start user-profile-desc */}
      <div className="p-4 user-profile-desc" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
              <div
                className="simplebar-content-wrapper"
                style={{ height: "auto", overflow: "hidden" }}
              >
                <div className="simplebar-content" style={{ padding: 24 }}>
                  <div className="text-muted">
                    <p className="mb-4">
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual.
                    </p>
                  </div>
                  <div className="accordion" id="myprofile">
                    <div className="accordion-item card border mb-2">
                      <div className="accordion-header" id="about3">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#aboutprofile"
                          aria-expanded="true"
                          aria-controls="aboutprofile"
                        >
                          <h5 className="font-size-14 m-0">
                            <i className="ri-user-2-line me-2 ms-0 align-middle d-inline-block" />{" "}
                            About
                          </h5>
                        </button>
                      </div>
                      <div
                        id="aboutprofile"
                        className="accordion-collapse collapse show"
                        aria-labelledby="about3"
                        data-bs-parent="#myprofile"
                      >
                        <div className="accordion-body">
                          <div>
                            <p className="text-muted mb-1">Name</p>
                            <h5 className="font-size-14">{Contact.name+" "+Contact.surname}</h5>
                          </div>
                          <div className="mt-4">
                            <p className="text-muted mb-1">Email</p>
                            <h5 className="font-size-14">{Contact.email}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* end profile-user-accordion */}
                  </div>
                  {/* end user-profile-desc */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: 0, height: 0 }}
          />
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}
          />
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              display: "none",
              height: 450
            }}
          />
        </div>
      </div>
      {/* end User profile detail sidebar */}
    </div>
    
        </> );
})

export default ChatRoomUserProfileSideBar;