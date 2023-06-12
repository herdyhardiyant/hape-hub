const phoneDummy = 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Black/Apple-iPhone-12-Black-thumbnail.png'


function PhoneItem() {

  //TODO - on click, add the phone to the cart
    return (  

        <div className='flex flex-col cursor-pointer hover:scale-105 ease-in-out duration-150 relative justify-between bg-stone-800 w-64 h-64 p-4 rounded-lg shadow-lg '>
          <img className='object-contain w-full h-2/3 ' src={phoneDummy} alt="Phone dummy" />
          <div>
            <h3>Phone Name #1113</h3>
            <p>Price: $1000</p>
          </div>
      
        </div>
    );
}

export default PhoneItem;