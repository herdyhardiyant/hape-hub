import PhoneItem from "./PhoneItem";

function PhoneList() {

  //TODO - fetch phones from the server
  
    return ( 

        <div className='flex flex-row gap-4 p-8'>

        <PhoneItem />
        <PhoneItem />
        <PhoneItem />
        <PhoneItem />
        
  
       </div>
     );
}

export default PhoneList;