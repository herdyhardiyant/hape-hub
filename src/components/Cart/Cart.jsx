function Cart() {

    //TODO - open the cart
    return ( 
        <>
            <h1 className="text-xl">Your cart</h1>
            <div className='flex flex-row gap-4 p-8'>

        <PhoneItem />
        <PhoneItem />
        <PhoneItem />
        <PhoneItem />
        
  
       </div>
        </>
     );
}

export default Cart;