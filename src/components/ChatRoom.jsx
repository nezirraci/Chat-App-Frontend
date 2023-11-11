import ChatRoomHead from "./ChatRoomHead";
import ChatConversation from "./ChatConversation";
import ChatInput from "./ChatInput";
import ChatRoomUserProfileSideBar from "./ChatRoomUserProfileSideBar";
import AudioModal from "./AudioModal";
import VideoModal from "./VideoModal";
import { useSelector } from "react-redux";
import { useRef,useState } from "react";


function ChatRoom() {

  const selectedChatRoom=useSelector(state => state.chatRooms.selectedChatRoom);
  const showChatRoom=useSelector(state => state.ui.showChatRoom);
  console.log(showChatRoom,'SHOWCHATROOOM');
  const ProfileSideBar=useRef(null);
  const [searchConversationCharacters,setSearchingConversationCharacters]=useState("");

  async function OpenSideBar() {
   ProfileSideBar.current.style.display="block";
  }


    return ( 
        <>
        {selectedChatRoom!=null ? 
        <div  className="user-chat w-100 overflow-hidden user-chat-show" style={{display:showChatRoom ? 'block':'none'}}>
        <div className="d-lg-flex">
           <div className="w-100 overflow-hidden position-relative">
              <ChatRoomHead Contact={selectedChatRoom.contact} OpenSideBar={OpenSideBar} SetSearchCharacters={setSearchingConversationCharacters}/>
              <ChatConversation SearchingCharacters={searchConversationCharacters} ChatRoomId={selectedChatRoom.id} Contact={selectedChatRoom.contact} />
              <ChatInput ChatRoomId={selectedChatRoom.id} Contact={selectedChatRoom.contact}/>
           </div>
           <ChatRoomUserProfileSideBar Contact={selectedChatRoom.contact} ref={ProfileSideBar} />
        </div>
       <AudioModal />
       <VideoModal />
     </div>:"" }
            
        </>
     );
}

export default ChatRoom;