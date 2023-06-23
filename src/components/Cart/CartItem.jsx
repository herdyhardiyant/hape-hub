
function CartItem({name, price ,image, onClick}) {

    const formattedPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });

    //TODO : Delete item
    return (
        
        <div onClick={onClick} className='flex flex-col justify-start bg-stone-800 w-64 h-auto p-4 rounded-lg shadow-lg '>
            <img className='object-contain w-full h-40' src={image} alt="Phone dummy" />
            <br />
            
            <div>
                <h3 className="truncate">{name}</h3>
                <p>{formattedPrice}</p>
                <br />
                <button className="border text-gray-300 hover:text-white font-semibold py-2 px-4 rounded">Remove</button>
            </div>

        </div>
    );
}

export default CartItem;