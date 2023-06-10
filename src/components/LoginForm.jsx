import CenterItemOverlay from "./CenterItemOverlay";

function LoginForm() {
    return ( 
        <CenterItemOverlay>
              <form className='bg-stone-800 w-64 h-64 p-4 rounded-lg'>
                    <h3 className="text-xl">Login</h3>
                    <br />
                    <label>
                        Username:
                        <input type="email" />
                    </label>
                    
                    <label>
                        Password:
                        <input type='password' />
                    </label>
                    <div className='flex flex-row justify-between
                    mt-2'>
                        <button>cancel</button>
                        <button>submit</button>
                    </div>
                </form>
        </CenterItemOverlay>
     );
}

export default LoginForm;