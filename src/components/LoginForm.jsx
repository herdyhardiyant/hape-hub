import CenterItemOverlay from "./CenterItemOverlay";
import { useState } from "react";

function LoginForm() {
    
    const [isLoginOpen, setIsLoginOpen] = useState(true)
    const onLoginBackdropClick = () => { 
        setIsLoginOpen(false)
        console.log('onLoginBackdropClick')
    }

    const onCancelButtonClick = (event) => { 
        event.preventDefault()
        setIsLoginOpen(false)
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