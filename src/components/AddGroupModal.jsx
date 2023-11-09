function AddGroupModal() {
    return ( 
        <>
              <div
        className="modal fade"
        id="addgroup-exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="addgroup-exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title font-size-16"
                id="addgroup-exampleModalLabel"
              >
                Create New Group
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="addgroupname-input" className="form-label">
                    Group Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="addgroupname-input"
                    placeholder="Enter Group Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Group Members</label>
                  <div className="mb-3">
                    <button
                      className="btn btn-light btn-sm"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#groupmembercollapse"
                      aria-expanded="false"
                      aria-controls="groupmembercollapse"
                    >
                      Select Members
                    </button>
                  </div>
                  <div className="collapse" id="groupmembercollapse">
                    <div className="card border">
                      <div className="card-header">
                        <h5 className="font-size-15 mb-0">Contacts</h5>
                      </div>
                      <div className="card-body p-2">
                        <div data-simplebar="init" style={{ maxHeight: 150 }}>
                          <div
                            className="simplebar-wrapper"
                            style={{ margin: 0 }}
                          >
                            <div className="simplebar-height-auto-observer-wrapper">
                              <div className="simplebar-height-auto-observer" />
                            </div>
                            <div className="simplebar-mask">
                              <div
                                className="simplebar-offset"
                                style={{ right: 0, bottom: 0 }}
                              >
                                <div
                                  className="simplebar-content-wrapper"
                                  style={{ height: "auto", overflow: "hidden" }}
                                >
                                  <div
                                    className="simplebar-content"
                                    style={{ padding: 0 }}
                                  >
                                    <div>
                                      <ul className="list-unstyled contact-list">
                                        <li>
                                          <div className="form-check">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="memberCheck1"
                                              defaultChecked=""
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="memberCheck1"
                                            >
                                              Albert Rodarte
                                            </label>
                                          </div>
                                        </li>
                                       
                                      </ul>
                                    </div>
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
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                display: "none"
                              }}
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
                                display: "none"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="addgroupdescription-input"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="addgroupdescription-input"
                    rows={3}
                    placeholder="Enter Description"
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Create Groups
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
     );
}

export default AddGroupModal;