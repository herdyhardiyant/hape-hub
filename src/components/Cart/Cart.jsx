import CartItem from "./CartItem";

import { useState, useEffect } from 'react';

function Cart({ isLoggedIn, isOpen, onCloseCart, cartList, onRemoveCartItem }) {

    const isCartOpen = isLoggedIn && isOpen;

    //TODO : Delete item

    const onRemove = (uniqueKey) => {
        onRemoveCartItem(uniqueKey);
    }

    return isCartOpen && (
        <div className="w-full p-8 overflow-clip">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold">Your cart</h1>
                <button onClick={onCloseCart} className=" bg-stone-800 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded">Check Out</button>
                <button onClick={onCloseCart} className="border text-gray-300 hover:text-white font-semibold py-2 px-4 rounded">Close</button>

            </div>
            <br />
            <div className='flex flex-row flex-wrap justify-start gap-4'>
                {

                    cartList.length === 0 ? <h1 className="text-xl">Your cart is empty</h1>
                        :
                        cartList.map((item) => {
                            return (
                                <CartItem key={item.uniqueKey} uniqueKey={item.uniqueKey} name={item.title} image={item.image} price={item.price} onRemoveCartItem={onRemove} />
                            )
                        }
                        )
                }
            </div>
        </div>
    );
}

export default Cart;