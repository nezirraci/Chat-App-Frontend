import { useDispatch, useSelector } from "react-redux";
import ContactService from "../services/ContactService";
import { removeContact } from "../storeslices/contactsSlice";
import { AddChatRoom } from "../storeslices/chatRoomsSlice";
import ChatRoomService from "../services/ChatRoomService";

function ContactItem(props) {

  const Id=props.Id
  const Name=props.Name;
  const Surname=props.Surname;
  const Email=props.Email;
  const SelfAccountId=props.SelfId;
  const dispatch=useDispatch();
  const user=useSelector(state => state.auth.userDetails);

  async function DeleteContact() {
    
    await ContactService.DeleteContact({Id:Id})
    dispatch(removeContact(Id));
  }

  async function StartChatRoom() {

     var result=await ChatRoomService.CreateChatRoom({StartedChatRoomUserId:user.id, NonStartedChatRoomUserId:SelfAccountId});
     if(result.Succeded) {
       dispatch(AddChatRoom(result.Data));
     }
  }

    return (  
        <>
        <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 m-0">{Name} {Surname}</h5>
                        </div>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-muted dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Block{" "}
                              <i className="ri-forbid-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" onClick={(event)=> DeleteContact()}>
                              Remove{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                            <a className="dropdown-item" onClick={(event)=> StartChatRoom()}>
                              Start Chat{" "}
                              <i className="ri-delete-bin-line float-end text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
        
        </>
    );
}

export default ContactItem;