import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from "./contexts/ProductContext.js";
import { CartContext } from "./contexts/CartContext.js"

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const RemoveItem = (id) => {
			const newCart = [...cart];
			setCart(newCart.filter(item => item.id !== id))
		
	}

	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem('cart')))
	}, [])
	
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify([...cart]))

	},[cart])

	

	console.log(cart)
	return (
		<ProductContext.Provider value ={{products, addItem}}>
			<CartContext.Provider value ={{cart, RemoveItem}}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component = {Products}
					/>

					<Route
						path="/cart"
						component = {ShoppingCart}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
