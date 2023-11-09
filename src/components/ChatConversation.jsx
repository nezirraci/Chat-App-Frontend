import ReceivedMessageText from "./ReceivedMessageText";
import SentMessageText from "./SentMessageText";
import ReceivedMessagePhoto from "./ReceivedMessagePhoto";
import SentMessagePhoto from "./SentMessagePhoto"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import MessageService from "../services/MessageService";
import { loadChatRoomMessages } from "../storeslices/messagesSlice";


function ChatConversation(props) {

  const ChatRoomId = props.ChatRoomId;
  const Contact = props.Contact;
  const messages = useSelector(state => state.messages[ChatRoomId]);
  const user = useSelector(state => state.auth.userDetails);
  const SearchingCharacters=props.SearchingCharacters;
  const dispatch = useDispatch();
  const contentWrapper = useRef(null);


  useEffect(() => {
    async function getChatMessages() {
      if (messages == null) {
        var result = await MessageService.GetMessagesByChatRoomId({ ChatRoomId: ChatRoomId });
        if (result.Succeded)
          dispatch(loadChatRoomMessages({
            ChatRoomId: ChatRoomId,
            Messages: result.Data
          }));
        contentWrapper.current.scrollIntoView({ behavior: "smooth", block: "end" });

      }

    }
    getChatMessages();
    contentWrapper.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [ChatRoomId,messages]);


  function ConstructMessage(Message,SearchingCharacters) {
    if(Message.content.toLowerCase().includes(SearchingCharacters.toLowerCase())) {

   
        if (Message.type == "TEXT") {
          if (Message.sentByUserId == user.id)
            return <SentMessageText Message={Message} />
          else
            return <ReceivedMessageText Message={Message} Contact={Contact} />
        }

       else {
          if (Message.sentByUserId == user.id)
            return <SentMessagePhoto Message={Message} />
          else
            return <ReceivedMessagePhoto Message={Message} Contact={Contact} />
      }

    }
  }

  return (<>
    <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
      <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
        <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer" />
        </div>
        <div className="simplebar-mask">
          <div
            className="simplebar-content-wrapper"
            style={{ height: "100%" }}
          >
            <div ref={contentWrapper} style={{ padding: 24 }}>
              <ul className="list-unstyled mb-0">
                <li>
                  <div className="chat-day-title">
                    <span className="title">Today</span>
                  </div>
                </li>
                {
                  messages != null ? messages.map(message =>
                    ConstructMessage(message,SearchingCharacters)) : ""
                }
              </ul>
            </div>
          </div>

        </div>
        <div
          className="simplebar-placeholder"
          style={{ width: "auto" }}
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
            height: 322,
            transform: "translate3d(0px, 0px, 0px)",
            display: "block"
          }}
        />
      </div>
    </div>

  </>);
}

export default ChatConversation;