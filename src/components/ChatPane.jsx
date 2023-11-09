import { useDispatch, useSelector } from 'react-redux';
import ChatRoomItem from './ChatRoomItem'
import ChatRoomItemSearch from './ChatRoomItemSearch';
import { useEffect} from 'react';
import ChatRoomService from '../services/ChatRoomService';
import { LoadChatRooms, setSelectedChatRoom } from '../storeslices/chatRoomsSlice';

function ChatPane() {

  const chatRooms=useSelector(state => state.chatRooms);
  const dispatch=useDispatch();
  console.log(chatRooms,"CHATROOOMS");

  useEffect(()=> {
    async function fetchChatRooms() {
      var result=await ChatRoomService.GetAllChatRooms();
      console.log(result,"ALL CHATROOOMS");
      dispatch(LoadChatRooms(result.Data));
      dispatch(setSelectedChatRoom(result.Data[0]));
    }
    fetchChatRooms();

  },[]);

    return (<>
            <div
  className="tab-pane fade show active"
  id="pills-chat"
  role="tabpanel"
  aria-labelledby="pills-chat-tab"
>
  {/* Start chats content */}
  <div>
      <ChatRoomItemSearch />
    {/* .p-4 */}
    {/* end user status */}
    {/* Start chat-message-list */}
    <div className="">
      <h5 className="mb-3 px-3 font-size-16">Recent</h5>
      <div className="chat-message-list px-2" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: "0px -8px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "-18.6667px", bottom: 0 }}
            >
              <div
                className="simplebar-content-wrapper"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div
                  className="simplebar-content"
                  style={{ padding: "0px 8px" }}
                >
                  <ul className="list-unstyled chat-list chat-user-list">
                    {
                      Object.keys(chatRooms).map(function(key,index) {
                        if(key.startsWith("ChatRoom"))
                        return <ChatRoomItem Id={key} />
                      })
                    
                    }       
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: 889 }}
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
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: 296,
              transform: "translate3d(0px, 0px, 0px)",
              display: "block"
            }}
          />
        </div>
      </div>
    </div>
    {/* End chat-message-list */}
  </div>
  {/* Start chats content */}
</div>

    
        </>  );
}

export default ChatPane;