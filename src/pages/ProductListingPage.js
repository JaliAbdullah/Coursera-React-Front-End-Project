import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import './ProductListingPage.css';
import monstera from '../assets/monstera.jpg';
import snakeplant from '../assets/snake.jpg';
import aloevera from '../assets/Aloe-Vera-Plant.jpg';
import fiddlefig from '../assets/Fiddle Leaf Fig.jpg';
import zzplant from '../assets/zzplant.jpg';
import jade from '../assets/jade.jpg';

const plants = [
  { id: 1, name: 'Monstera', price: 30, image: monstera, category: 'Indoor' },
  { id: 2, name: 'Snake Plant', price: 25, image: snakeplant, category: 'Indoor' },
  { id: 3, name: 'Aloe Vera', price: 20, image: aloevera, category: 'Succulents' },
  { id: 4, name: 'Fiddle Leaf Fig', price: 50, image: fiddlefig, category: 'Large Plants' },
  { id: 5, name: 'ZZ Plant', price: 28, image: zzplant, category: 'Indoor' },
  { id: 6, name: 'Jade Plant', price: 18, image: jade, category: 'Succulents' },
];



const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="product-listing">
      <h2>Our Houseplants</h2>
      <div className="categories">
        <span>Categories: Indoor, Succulents, Large Plants</span>
      </div>
      <div className="plant-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button 
              disabled={isInCart(plant.id)} 
              onClick={() => dispatch(addItem(plant))}
            >
              {isInCart(plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
