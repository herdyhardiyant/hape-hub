import { useState } from 'react';
function Navbar({ onLoginClick, onRegisterClick, isUserLoggedIn, onLogout }) {

    const [isCartOpen, setIsCartOpen] = useState(false)

    const onOpenCart = () => {
        //TODO - open the cart
        alert('Your cart is empty')
    }

    return (
        <>
        <div className='flex flex-row items-center justify-between align-middle bg-stone-800 p-4 px-6 h-20 shadow-lg'>
            <h1 className='text-4xl '>Hape Hub_@</h1>
            {
                isUserLoggedIn 
                ?
                <div className='flex flex-row gap-10'>
                    <button onClick={onOpenCart}>Your Cart</button>
                    <button onClick={onLogout}>Logout</button>
                </div>
                :
                <div className='flex flex-row gap-10'>
                    <button onClick={onRegisterClick}>register</button>
                    <button onClick={onLoginClick}>login</button>
                </div>
            }
        </div>
        </>
    );
}


export default Navbar
    ;