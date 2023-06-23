import CartItem from "./CartItem";

import { useState, useEffect } from 'react';

function Cart({ isLoggedIn, isOpen, onCloseCart, cartList }) {
    const [products, setProduct] = useState([]);
    const isCartOpen = isLoggedIn && isOpen;

    //TODO : dont use this, we already have the data in the cartList
    //TODO : Delete item
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = cartList.map(async (item) => {
                    const response = await fetch(`https://fakestoreapi.com/products/${item.id}`);
                    return await response.json();
                });
                const products = await Promise.all(data);
                setProduct(products);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [cartList]);

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
                        products.map((item) => {
                            return (
                                <CartItem key={item.id + Math.random()} name={item.title} image={item.image} price={item.price} />
                            )
                        }
                        )
                }
            </div>
        </div>
    );
}

export default Cart;