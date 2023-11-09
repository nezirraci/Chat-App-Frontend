import ProfilePhotoStatus from "./ProfilePhotoStatus";
import ProfileData from "./ProfileData";

function ProfilePane() {

    return (<> 
       <div
  className="tab-pane"
  id="pills-user"
  role="tabpanel"
  aria-labelledby="pills-user-tab"
>
  {/* Start profile content */}
  <div>
    <div className="px-4 pt-4">
      <div className="user-chat-nav float-end">
        <div className="dropdown">
          <a
            href="#"
            className="font-size-18 text-muted dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="ri-more-2-fill" />
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">
              Edit
            </a>
            <a className="dropdown-item" href="#">
              Action
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </div>
        </div>
      </div>
      <h4 className="mb-0">My Profile</h4>
    </div>
      <ProfilePhotoStatus/>
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
             <ProfileData />
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
    {/* end user-profile-desc */}
  </div>
  {/* End profile content */}
</div>


    </>  );
}

export default ProfilePane;