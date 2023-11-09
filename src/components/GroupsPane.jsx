import GroupItem from './GroupItem'
import AddGroupModal from './AddGroupModal'
import GroupItemSearch from './GroupItemSearch'
function GroupsPane() {
    return (  <>
            <div
  className="tab-pane"
  id="pills-groups"
  role="tabpanel"
  aria-labelledby="pills-groups-tab"
>
  {/* Start Groups content */}
  <div>
    <div className="p-4">
      <div className="user-chat-nav float-end">
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          aria-label="Create group"
          data-bs-original-title="Create group"
        >
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
            data-bs-toggle="modal"
            data-bs-target="#addgroup-exampleModal"
          >
            <i className="ri-group-line me-1 ms-0" />
          </button>
        </div>
      </div>
      <h4 className="mb-4">Groups</h4>
      {/* Start add group Modal */}
      <AddGroupModal />
      {/* End add group Modal */}
      <GroupItemSearch />
    </div>
    {/* Start chat-group-list */}
    <div
      className="p-4 chat-message-list chat-group-list"
      data-simplebar="init"
    >
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
                <ul className="list-unstyled chat-list">
                  <GroupItem />                  
                </ul>
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
          style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}
        />
      </div>
    </div>
    {/* End chat-group-list */}
  </div>
  {/* End Groups content */}
</div>

    </>);
}

export default GroupsPane;