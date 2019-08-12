import React, {useContext} from 'react';

import { CartContext } from "../contexts/CartContext.js"

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart, RemoveItem } = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	
console.log(cart);
	return (
		
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} RemoveItem = {RemoveItem}/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
