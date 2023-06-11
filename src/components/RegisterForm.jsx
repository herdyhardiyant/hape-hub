import CenterItemOverlay from "./CenterItemOverlay"

function RegisterForm({onClose, isRegisterOpen}) {
    const onBackdropClick = () => { 
        onClose()
    }

    const onCancelButtonClick = (event) => { 
        event.preventDefault()
        onClose()
    }
    return ( 
        <CenterItemOverlay isShown={isRegisterOpen} onBackdropClick={onBackdropClick}>
              <form className="flex flex-col ">
                    <h3 className="text-xl">Register</h3>
                    <br />
                    <label>
                        Username:
                        <input type="text" />
                    </label>
                    
                    <label>
                        Password:
                        <input type='password'/>
                    </label>
                    <label>
                        Confirm Password:
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

export default RegisterForm;