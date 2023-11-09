import { useSelector } from "react-redux";

function ModalBackgroundFade() {
    
    const backdropFade=useSelector(state => state.ui.backgroundFade);

    if(backdropFade) {
        return ( 
            <div className="modal-backdrop fade show"></div>
       );
    }
    return <></>
   
}

export default ModalBackgroundFade;