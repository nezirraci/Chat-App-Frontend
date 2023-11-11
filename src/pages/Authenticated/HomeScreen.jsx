import Sidebar from "../../components/Sidebar";
import ProfilePane from "../../components/ProfilePane";
import ChatPane from "../../components/ChatPane";
import ContactsPane from "../../components/ContactsPane";
import SettingsPane from "../../components/SettingsPane";
import GroupsPane from "../../components/GroupsPane";
import ChatRoom from "../../components/ChatRoom";
import ModalBackgroundFade from "../../components/ModalBackGroundFade";

function HomeScreen() {

    
    return <div className="layout-wrapper d-lg-flex">
                <Sidebar/>
                <div className="chat-leftsidebar me-lg-1 ms-lg-0">
                    <div className="tab-content">
                        <ProfilePane/>
                        <ChatPane/>
                        <GroupsPane/>
                        <ContactsPane/>
                        <SettingsPane/>
                    </div>
                </div>
                <ChatRoom/>
               <ModalBackgroundFade/>
            </div>
       
}

export default HomeScreen;