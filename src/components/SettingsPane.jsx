import SettingsProfilePictureStatus from "./SettingsProfilePictureStatus";
import SettingsUserDetails from "./SettingsUserDetails";

function SettingsPane() {
    return ( <>
        <div
  className="tab-pane "
  id="pills-setting"
  role="tabpanel"
  aria-labelledby="pills-setting-tab"
>
  {/* Start Settings content */}
  <div>
    <SettingsProfilePictureStatus />
    {/* End profile user */}
    {/* Start User profile description */}
    <div className="p-4 user-profile-desc" data-simplebar="init">
      <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
        <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer" />
        </div>
        <div className="simplebar-mask">
          <div
            className="simplebar-offset"
            style={{ right: "-18.6667px", bottom: 0 }}
          >
            <div
              className="simplebar-content-wrapper"
              style={{ height: "100%", overflow: "hidden scroll" }}
            >
              <div className="simplebar-content" style={{ padding: 24 }}>
               <SettingsUserDetails/>
                {/* end profile-setting-accordion */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="simplebar-placeholder"
          style={{ width: "auto", height: 535 }}
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
        style={{ visibility: "visible" }}
      >
        <div
          className="simplebar-scrollbar"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            display: "block",
            height: 457
          }}
        />
      </div>
    </div>
    {/* End User profile description */}
  </div>
  {/* Start Settings content */}
</div>

        
    </> );
}

export default SettingsPane;