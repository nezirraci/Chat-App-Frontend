import { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageService from "../services/MessageService";
import { AddChatRoomMessage } from "../storeslices/messagesSlice";

function ChatInput(props) {

  const Contact=props.Contact;
  const ChatRoomId=props.ChatRoomId;
  const [textInput,setTextInput]=useState("");
  const user=useSelector(state => state.auth.userDetails);
  const dispatch=useDispatch();
  const fileRef=useRef(null);

  useEffect(()=> {
    setTextInput("");
  },[ChatRoomId])

  async function SendMessageText() {
    
      var Message={
        ChatRoomId:ChatRoomId,
        SentByUserId:user.id,
        ReceivedByUserId:Contact.id,
        Type:"TEXT",
        Content:textInput,
        DateTimeSent:new Date().toISOString()
      }

      var result=await MessageService.SendMessage(Message);
      console.log(result,"RESUUULT");
      if(result.Succeded) {
        dispatch(AddChatRoomMessage({ChatRoomId:ChatRoomId,Message:result.Data}));
        setTextInput("");
      }

  }

  async function SendMessageFile(event) {

    var Message={
      ChatRoomId:ChatRoomId,
      SentByUserId:user.id,
      ReceivedByUserId:Contact.id,
      Type:"FILE",
      Content:event.target.files[0].name,
      DateTimeSent:new Date().toISOString(),
      File:event.target.files[0]
    }
    
    console.log(Message);
    var result=await MessageService.SendMessageFile(Message);
    console.log(result);
    if(result.Succeded) {
      dispatch(AddChatRoomMessage({ChatRoomId:ChatRoomId,Message:result.Data}));
    }

 }

 async function OpenFileInput() {
  fileRef.current.click();
 }


    return ( <>
                  {/* start chat input section */}
      <div className="chat-input-section p-3 p-lg-4 border-top mb-0">
        <div className="row g-0">
          <div className="col">
            <input
              type="text"
              onInput={(event)=>{setTextInput(event.target.value)}}
              className="form-control form-control-lg bg-light border-light"
              placeholder="Enter Message..."
              value={textInput}

            />
          </div>
          <div className="col-auto">
            <div className="chat-input-links ms-md-2 me-md-0">
              <ul className="list-inline mb-0">
                <li
                  className="list-inline-item"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Emoji"
                  data-bs-original-title="Emoji"
                >
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                  >
                    <i className="ri-emotion-happy-line" />
                  </button>
                </li>
                <li
                  className="list-inline-item"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Attached File"
                  data-bs-original-title="Attached File"
                >
                  <button
                  onClick={(event)=> OpenFileInput()}
                    type="button"
                    className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                  >
                    <i className="ri-attachment-line" />
                  </button>
                  <input ref={fileRef} type="file" hidden onChange={(event)=> SendMessageFile(event)}/>
                </li>
                <li className="list-inline-item">
                  <button
                    type="submit"
                    onClick={(event)=>SendMessageText()}
                    className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                  >
                    <i className="ri-send-plane-2-fill" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end chat input section */}
    </> );
}

export default ChatInput;