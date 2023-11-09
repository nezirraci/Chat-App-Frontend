function GroupItem() {
    return ( <>
              <li>
                    <a href="#">
                      <div className="d-flex align-items-center">
                        <div className="chat-user-img me-3 ms-0">
                          <div className="avatar-xs">
                            <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                              G
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="text-truncate font-size-14 mb-0">
                            #General
                          </h5>
                        </div>
                      </div>
                    </a>
                  </li>
        
    </> );
}

export default GroupItem;