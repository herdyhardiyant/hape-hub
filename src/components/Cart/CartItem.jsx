

const phoneDummy = 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Black/Apple-iPhone-12-Black-thumbnail.png'

function CartItem({onClick}) {

    //TODO : Delete item
    return (
        
        <div onClick={onClick} className='flex flex-col justify-start bg-stone-800 w-64 h-auto p-4 rounded-lg shadow-lg '>
            <img className='object-contain w-full h-40' src={phoneDummy} alt="Phone dummy" />
            <div>
                <h3>Phone Name #1113</h3>
                <p>Price: $1000</p>
                <br />
                <button className="border text-gray-300 hover:text-white font-semibold py-2 px-4 rounded">Remove</button>
            </div>

        </div>
    );
}

export default CartItem;