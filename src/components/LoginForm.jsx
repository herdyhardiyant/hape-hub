import CenterItemOverlay from "./CenterItemOverlay";
import { useState } from "react";

function LoginForm({isLoginOpen, onClose}) {
    
    const onLoginBackdropClick = () => { 
        onClose()
    }

    const onCancelButtonClick = (event) => { 
        event.preventDefault()
        onClose()
    }
    
    
    return ( 
            <CenterItemOverlay isShown={isLoginOpen} onBackdropClick={onLoginBackdropClick}>
              <form className="flex flex-col ">
                    <h3 className="text-xl">Login</h3>
                    <br />
                    <label>
                        Username:
                        <input type="text" />
                    </label>
                    
                    <label>
                        Password:
                        <input type='password'/>
                    </label>
                    <div className='flex flex-row justify-between
                    mt-2'>
                        <button onClick={onCancelButtonClick}>cancel</button>
                        <button>submit</button>
                    </div>
                </form>
            </CenterItemOverlay>
     );
}


export default LoginForm;