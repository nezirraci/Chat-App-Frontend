import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';
import ContactService from "../services/ContactService";
import { closeAddContactModal } from "../storeslices/uiSlice";
import {addContact} from "../storeslices/contactsSlice"

function AddContactModal() {

  const user=useSelector(state => state.auth.userDetails);
  const showModal=useSelector(state => state.ui.addContactModal);
  const dispatch=useDispatch();
  const [contactEmail,setContactEmail]=useState("");
  

  async function AddContact() {
    
    const request= {
      InvitingFriendId:user.id,
      Email:contactEmail
    }

    var result=await ContactService.CreateContact(request);
    if(result.Succeded) {
      dispatch(addContact(result.Data));
      setContactEmail("");
      CloseModal();
    }
    else {

      

    }
    
  }

  async function CloseModal() {
    dispatch(closeAddContactModal());
  }


    return ( <>
    {
    console.log(contactEmail,"Email")
 
    }
        <div
        className={`modal fade `+(showModal ? "show":"")}
        id="addContact-exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="addContact-exampleModalLabel"
        aria-hidden="true"
        style={{display: showModal ? "block":"none"}}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title font-size-16"
                id="addContact-exampleModalLabel"
            
              >
                Add Contact
              </h5>
              <button
                onClick={(event)=> CloseModal()}
                type="button"
                className="btn-close"
                //data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="addcontactemail-input" className="form-label">
                    Email
                  </label>
                  <input
                  onInput={event=> setContactEmail(event.target.value)}
                    type="email"
                    className="form-control"
                    id="addcontactemail-input"
                    placeholder="Enter Email"
                    value={contactEmail}
                  />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button
                onClick={(event)=> CloseModal()}
                type="button"
                className="btn btn-link"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={(event) => AddContact()} type="button" className="btn btn-primary">
                Add Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    
        </> );
}

export default AddContactModal;