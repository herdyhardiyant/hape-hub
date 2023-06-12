
import { useState } from "react";
import CenterItemOverlay from "./CenterItemOverlay"

function RegisterForm({onClose, isRegisterOpen, onSuccessfulRegister}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onUsernameChange = (event) => { 
        setUsername(event.target.value)
    }

    const onPasswordChange = (event) => { 
        setPassword(event.target.value)
    }

    const onConfirmPasswordChange = (event) => { 
        setConfirmPassword(event.target.value)
    }
    
    const onBackdropClick = () => { 
        onClose()
    }

    const onCancelButtonClick = (event) => { 
        event.preventDefault()
        onClose()
    }

    const onRegister = () => {
        onClose()

        //TODO - call the API to register
        // if successful, call onSuccessfulRegister()
        onSuccessfulRegister()
    }

    return ( 
        <CenterItemOverlay isShown={isRegisterOpen} onBackdropClick={onBackdropClick}>
              <form className="flex flex-col ">
                    <h3 className="text-xl">Register</h3>
                    <br />
                    <label>
                        Username:
                        <input type="text" value={username} onChange={onUsernameChange} className="text-black" />
                    </label>
                    
                    <label>
                        Password:
                        <input type='password' value={password} onChange={onPasswordChange} className="text-black"/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type='password' value={confirmPassword} onChange={onConfirmPasswordChange} className="text-black"/>
                    </label>
                    <div className='flex flex-row justify-between
                    mt-2'>
                        <button onClick={onCancelButtonClick}>cancel</button>
                        <button onClick={ (event) => {event.preventDefault(); onRegister()} }>submit</button>
                    </div>
                </form>
            </CenterItemOverlay>
     );
}

export default RegisterForm;