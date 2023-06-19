import CenterItemOverlay from "../CenterItemOverlay";
import PhoneItem from "./PhoneItem";
import { useState } from 'react';

function PhoneList({isUserLoggedIn, isShown}) {
  const [isPhoneAddedOverlayOpen, setIsPhoneAddedOverlayOpen] = useState(false);


  //TODO - fetch phones from the server

  const onPhoneClick = () => {
    
    setIsPhoneAddedOverlayOpen(true); 
  }

  const onPhoneAddedOverlayClose = () => {
    setIsPhoneAddedOverlayOpen(false);  
  }

  return isShown && (
    <div className="w-full p-8 overflow-clip">

      <CenterItemOverlay isShown={isPhoneAddedOverlayOpen} onBackdropClick={onPhoneAddedOverlayClose}>
        <h1 className="text-xl">You add this phone to cart</h1>
        <button onClick={onPhoneAddedOverlayClose}>Close</button>
      </CenterItemOverlay>

      {
        isUserLoggedIn &&
      <h1 className="text-xl">Hello There... Available phones for you.</h1>
        
      }

      <br />
      <div className='flex flex-row flex-wrap gap-4'>

        <PhoneItem onClick={onPhoneClick} />
        <PhoneItem onClick={onPhoneClick}/>
        <PhoneItem onClick={onPhoneClick}/>
        <PhoneItem onClick={onPhoneClick}/>


      </div>
    </div>
  );
}

export default PhoneList;