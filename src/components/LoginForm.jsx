import CenterItemOverlay from "./CenterItemOverlay";
import { useState } from "react";

function LoginForm({isLoginOpen, onClose}) {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const onLoginBackdropClick = () => { 
        onClose()
    }

    const onCancelButtonClick = (event) => { 
        event.preventDefault()
        onClose()
    }

    const onUsernameChange = (event) => { 
        setUsername(event.target.value)
    }

    const onPasswordChange = (event) => { 
        setPassword(event.target.value)
    }
    
    
    return ( 
            <CenterItemOverlay isShown={isLoginOpen} onBackdropClick={onLoginBackdropClick}>
              <form className="flex flex-col">
                    <h3 className="text-xl">Login</h3>
                    <br />
                    <label>
                        Username:
                        <input className="text-black" type="text" value={username} onChange={onUsernameChange}/>
                    </label>
                    
                    <label>
                        Password:
                        <input type='password' value={password} onChange={onPasswordChange} className="text-black"/>
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