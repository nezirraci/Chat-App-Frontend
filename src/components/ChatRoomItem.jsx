import { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChatRoom } from "../storeslices/chatRoomsSlice";

  
  function ChatRoomItem(props) {
    const Id=props.Id;
    const chatRoomItemData=useSelector(state => state.chatRooms[Id]);
    console.log(chatRoomItemData,"CHATROOOMITEM");
    const dispatch=useDispatch();


    async function setSelectedChatRoomData() {
      dispatch(setSelectedChatRoom(chatRoomItemData));
    }

    return ( <>
                  <li onClick={(event) => setSelectedChatRoomData()}>  
                      <a href="#">
                        <div className="d-flex">
                          <div className="chat-user-img online align-self-center me-3 ms-0">
                            <img
                              src={chatRoomItemData.contact.photo}
                              className="rounded-circle avatar-xs"
                              alt=""
                            />
                            <span className="user-status" />
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-15 mb-1">
                              {chatRoomItemData.contact.name+" "+chatRoomItemData.contact.surname}
                            </h5>
                            <p className="chat-user-message text-truncate mb-0">
                              {chatRoomItemData.lastChatMessage!=null ? chatRoomItemData.lastChatMessage.content:null}
                            </p>
                          </div>
                          <div className="font-size-11">{chatRoomItemData.lastChatMessage!=null ? chatRoomItemData.lastChatMessage.dateTimeSent:""}</div>
                        </div>
                      </a>
                    </li>
    </> );
}

export default ChatRoomItem;