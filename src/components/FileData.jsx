function FileData() {
    return (  
        <>
                                    <div className="card p-2 border mb-2">
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm me-3 ms-0">
                              <div className="avatar-title bg-primary-subtle text-primary rounded font-size-20">
                                <i className="ri-image-fill" />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <div className="text-start">
                                <h5 className="font-size-14 mb-1">
                                  Image-2.jpg
                                </h5>
                                <p className="text-muted font-size-13 mb-0">
                                  3.1 MB
                                </p>
                              </div>
                            </div>
                            <div className="ms-4 me-0">
                              <ul className="list-inline mb-0 font-size-18">
                                <li className="list-inline-item">
                                  <a href="#" className="text-muted px-1">
                                    <i className="ri-download-2-line" />
                                  </a>
                                </li>
                                <li className="list-inline-item dropdown">
                                  <a
                                    className="dropdown-toggle text-muted px-1"
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
                                      Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
        </>
    );
}

export default FileData;