import CartItem from "./CartItem";


function Cart({ isLoggedIn, isOpen, onCloseCart }) {

    //TODO - open the cart

    const isCartOpen = isLoggedIn && isOpen;

    return isCartOpen && (
        <div className="w-full p-8 overflow-clip">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold">Your cart</h1>
                <button onClick={onCloseCart} className=" bg-stone-800 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded">Close</button>

            </div>
            <br />
            <div className='flex flex-row flex-wrap justify-start gap-4'>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
        </div>
    );
}

export default Cart;