import { useSelector } from "react-redux";

function Sidebar() {

    const userDetails=useSelector(state => state.auth.userDetails);
    
    return ( 
        <>
            
            <div className="side-menu flex-lg-column me-lg-1 ms-lg-0">     
        <div className="navbar-brand-box">
        <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
                <img src="/src/assets/images/logo.svg" alt="" height="30"/>
            </span>
        </a>

        <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
                <img src="/src/assets/images/logo.svg" alt="" height="30"/>
            </span>
        </a>
    </div>
 
    <div className="flex-lg-column my-auto">
        <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Profile">
                <a className="nav-link" id="pills-user-tab" data-bs-toggle="pill" href="#pills-user" role="tab">
                    <i className="ri-user-2-line"></i>
                </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Chats">
                <a className="nav-link active" id="pills-chat-tab" data-bs-toggle="pill" href="#pills-chat" role="tab">
                    <i className="ri-message-3-line"></i>
                </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Groups">
                <a className="nav-link" id="pills-groups-tab" data-bs-toggle="pill" href="#pills-groups" role="tab">
                    <i className="ri-group-line"></i>
                </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Contacts">
                <a className="nav-link" id="pills-contacts-tab" data-bs-toggle="pill" href="#pills-contacts" role="tab">
                    <i className="ri-contacts-line"></i>
                </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings">
                <a className="nav-link" id="pills-setting-tab" data-bs-toggle="pill" href="#pills-setting" role="tab">
                    <i className="ri-settings-2-line"></i>
                </a>
            </li>
            <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="/src/assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle"/>
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-end text-muted"></i></a>
                    <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-end text-muted"></i></a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Log out <i className="ri-logout-circle-r-line float-end text-muted"></i></a>
                </div>
            </li>
        </ul>
    </div>


    <div className="flex-lg-column d-none d-lg-block">
        <ul className="nav side-menu-nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link light-dark-mode" href="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" title="Dark / Light Mode">
                    <i className='ri-sun-line theme-mode-icon'></i>
                </a>
            </li>

            <li className="nav-item btn-group dropup profile-user-dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
                        <img src={userDetails.photo} alt="" className="profile-user rounded-circle"/>            
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-end text-muted"></i></a>
                    <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-end text-muted"></i></a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="auth-login.html">Log out <i className="ri-logout-circle-r-line float-end text-muted"></i></a>
                </div>
            </li>
        </ul>
    </div>
 
</div>

        </>
     );
}

export default Sidebar;