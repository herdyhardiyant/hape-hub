import CenterItemOverlay from "../CenterItemOverlay";
import PhoneItem from "./PhoneItem";
import { useState } from 'react';

function PhoneList() {
  const [isPhoneAddedOverlayOpen, setIsPhoneAddedOverlayOpen] = useState(false);


  //TODO - fetch phones from the server

  const onPhoneClick = () => {
    setIsPhoneAddedOverlayOpen(true); 
  }

  const onPhoneAddedOverlayClose = () => {
    setIsPhoneAddedOverlayOpen(false);  
  }

  return (
    <>

      <CenterItemOverlay isShown={isPhoneAddedOverlayOpen} onBackdropClick={onPhoneAddedOverlayClose}>
        <h1 className="text-xl">You add this phone to cart</h1>
        <button onClick={onPhoneAddedOverlayClose}>Close</button>
      </CenterItemOverlay>

      <div className='flex flex-row gap-4 p-8'>

        <PhoneItem onClick={onPhoneClick} />
        <PhoneItem onClick={onPhoneClick}/>
        <PhoneItem onClick={onPhoneClick}/>
        <PhoneItem onClick={onPhoneClick}/>


      </div>
    </>
  );
}

export default PhoneList;