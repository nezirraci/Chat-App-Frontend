import SearchContactItem from "./SearchContactItem";
import AddContactModal from "./AddContactModal";
import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { showAddContactModal } from "../storeslices/uiSlice";
import ContactService from "../services/ContactService";
import { useEffect,useState } from "react";
import { loadContacts } from "../storeslices/contactsSlice";
function ContactsPane() {

  const user=useSelector(state => state.auth.userDetails);
  const contacts=useSelector(state => state.contacts.allContacts);
  const [searchContactCharacters,setSearchingCharacters]=useState("");
  console.log(contacts,"CONTACTS");
  const dispatch=useDispatch();
  
  async function ClickAddContactModal() {
    dispatch(showAddContactModal());
  }

   useEffect(()=> {
    async function fetchContacts() {
      var result=await ContactService.GetAllContacts({InvitingFriendId:user.id});
      console.log('result',result);
      if(result.Succeded) {
        dispatch(loadContacts(result.Data));
      }
    }
    fetchContacts();
   
  },[])


    return (  <>
    
        <div
  className="tab-pane"
  id="pills-contacts"
  role="tabpanel"
  aria-labelledby="pills-contacts-tab"
>
  {/* Start Contact content */}
  <div>
    <div className="p-4">
      <div className="user-chat-nav float-end">
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          aria-label="Add Contact"
          data-bs-original-title="Add Contact"
        >
          {/* Button trigger modal */}
          <button
          onClick={(event)=> ClickAddContactModal()}
            type="button"
            className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
            //  data-bs-toggle="modal"
            //  data-bs-target="#addContact-exampleModal"
          >
            <i className="ri-user-add-line" />
          </button>
        </div>
      </div>
      <h4 className="mb-4">Contacts</h4>
      {/* Start Add contact Modal */}
      <AddContactModal/>
      {/* End Add contact Modal */}
      <SearchContactItem SearchingFunction={setSearchingCharacters}/>
      {/* End search-box */}
    </div>
    {/* end p-4 */}
    {/* Start contact lists */}
    <div
      className="p-4 chat-message-list chat-group-list"
      data-simplebar="init"
    >
      <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
        <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer" />
        </div>
        <div className="simplebar-mask">
          <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
            <div
              className="simplebar-content-wrapper"
              style={{ height: "auto", overflow: "hidden" }}
            >
              <div className="simplebar-content" style={{ padding: 24 }}>
                <div>
            
                  <ul className="list-unstyled contact-list">
                    {
                      contacts.map(contact => {
                        if(contact.name.toLowerCase().includes(searchContactCharacters.toLowerCase()) || contact.surname.toLowerCase().includes(searchContactCharacters.toLowerCase()))
                        return <ContactItem Id={contact.id} SelfId={contact.selfAccountId} Name={contact.name} Surname={contact.surname} Email={contact.email}/> 
                      })
                       
                    }
                  
                  </ul>
                </div> 
                {/* end contact list S */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="simplebar-placeholder"
          style={{ width: 0, height: 0 }}
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
        style={{ visibility: "hidden" }}
      >
        <div
          className="simplebar-scrollbar"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            display: "none",
            height: 250
          }}
        />
      </div>
    </div>
    {/* end contact lists */}
  </div>
  {/* Start Contact content */}
</div>

    </>);
}

export default ContactsPane;