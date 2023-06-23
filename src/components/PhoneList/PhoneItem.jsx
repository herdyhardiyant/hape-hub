
function PhoneItem({name, price,image, onClick, id}) {

  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  const onItemClick = () => {
    onClick(name, price, id)
  }

  //TODO - on click, add the phone to the cart
    return (  
        
        <div onClick={onItemClick} className='flex flex-col cursor-pointer hover:scale-105 ease-in-out duration-150 relative justify-between bg-stone-800 w-64 h-64 p-4 rounded-lg shadow-lg '>
      <img className='object-contain w-full h-2/3 ' src={image} alt={`${name} Photo `} />
          <div>
            <h3>{name}</h3>
            <p>{formattedPrice}</p>
          </div>
      
        </div>
    );
}

export default PhoneItem;