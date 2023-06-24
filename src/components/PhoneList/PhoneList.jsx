import CenterItemOverlay from "../CenterItemOverlay";
import PhoneItem from "./PhoneItem";
import { useState, useEffect } from 'react';
function PhoneList({ isUserLoggedIn, isShown, onListItemClick }) {
  const [products, setProducts] = useState([]);
  const [isPhoneAddedOverlayOpen, setIsPhoneAddedOverlayOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/hape-hub-backend/api.php');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const onPhoneClick = (name, price, id) => {
    if (isUserLoggedIn === false) return;

    onListItemClick(name, price, id)
    setIsPhoneAddedOverlayOpen(true);
  }

  const onPhoneAddedOverlayClose = () => {
    setIsPhoneAddedOverlayOpen(false);
  }

  return isShown && (
    <div className="w-full p-8 overflow-clip">

      <CenterItemOverlay isShown={isPhoneAddedOverlayOpen} onBackdropClick={onPhoneAddedOverlayClose}>
        <h1 className="text-xl">You add this phone to cart</h1>
        <button onClick={onPhoneAddedOverlayClose}>Close</button>
      </CenterItemOverlay>

      {
        isUserLoggedIn &&
        <h1 className="text-xl">Hello There... Available phones for you.</h1>

      }

      <br />
      <div className='flex flex-row flex-wrap gap-4'>
        {
          products.map((item) => {
            return (
              <PhoneItem key={item.id} id={item.id} name={item.title} price={item.price} image={item.image} onClick={onPhoneClick} />
            )
          }
          )
        }

      </div>
    </div>
  );
}

export default PhoneList;