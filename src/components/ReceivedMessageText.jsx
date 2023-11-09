function ReceivedMessageText(props) {
  
  const Message=props.Message;
  const Contact=props.Contact;
    return ( <>
        <li  style={{overflow:"auto"}}>
                      <div className="conversation-list">
                        <div className="chat-avatar">
                          <img src={Contact.photo} alt="" />
                        </div>
                        <div className="user-chat-content">
                          <div className="ctext-wrap">
                            <div className="ctext-wrap-content">
                              <p className="mb-0">{Message.content}</p>
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
                          <div className="conversation-name">{Contact.name}</div>
                        </div>
                      </div>
                    </li>
        
    </> );
}

export default ReceivedMessageText;