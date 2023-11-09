import { useSelector } from "react-redux";


function SentMessagePhoto(props) {


  const Message=props.Message;
  const user=useSelector(state => state.auth.userDetails);

    return ( <>
        <li  style={{overflow:"auto"}} className="right">
                      <div className="conversation-list">
                        <div className="chat-avatar">
                          <img src={user.photo} alt="" />
                        </div>
                        <div className="user-chat-content">
                          <div className="ctext-wrap">
                            <div className="ctext-wrap-content">
                              <ul className="list-inline message-img  mb-0">
                                
                                <li className="list-inline-item message-img-list">
                                  <div>
                                    <a
                                      className="popup-img d-inline-block m-1"
                                      href={Message.content}
                                      title="Project 2"
                                    >
                                      <img
                                        src={Message.content}
                                        alt=""
                                        className="rounded border"
                                      />
                                    </a>
                                  </div>
                                  <div className="message-img-link">
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <a
                                          download={Message.content}
                                          href={Message.content}
                                          className="fw-medium"
                                        >
                                          <i className="ri-download-2-line" />
                                        </a>
                                      </li>
                                      <li className="list-inline-item dropdown">
                                        <a
                                          className="dropdown-toggle"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i className="ri-more-fill" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                          <a className="dropdown-item" href="#">
                                            Copy{" "}
                                            <i className="ri-file-copy-line float-end text-muted" />
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Save{" "}
                                            <i className="ri-save-line float-end text-muted" />
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Forward{" "}
                                            <i className="ri-chat-forward-line float-end text-muted" />
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Delete{" "}
                                            <i className="ri-delete-bin-line float-end text-muted" />
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                              <p className="chat-time mb-0">
                                <i className="ri-time-line align-middle" />{" "}
                                <span className="align-middle">{Message.dateTimeSent}</span>
                              </p>
                            </div>
                            <div className="dropdown align-self-start">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="ri-more-2-fill" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Copy{" "}
                                  <i className="ri-file-copy-line float-end text-muted" />
                                </a>
                                <a className="dropdown-item" href="#">
                                  Save{" "}
                                  <i className="ri-save-line float-end text-muted" />
                                </a>
                                <a className="dropdown-item" href="#">
                                  Forward{" "}
                                  <i className="ri-chat-forward-line float-end text-muted" />
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete{" "}
                                  <i className="ri-delete-bin-line float-end text-muted" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="conversation-name">{user.name+" "+user.surname}</div>
                        </div>
                      </div>
                    </li>
    
    </> );
}

export default SentMessagePhoto;