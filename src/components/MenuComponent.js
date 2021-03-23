import React from 'react';
import { DISHES } from '../Dishes';
import { CardSubtitle, Card, CardText, CardTitle, CardBody, CardImg, Button } from 'reactstrap';
import  { useState } from 'react';
const Menu = () => {
	var [dishes, setDishes] = useState(DISHES);
	// setDishes(dishes);
	// var [updateDish, setupdateDish] = useState();
	console.log("menu component");
	// var selectedDish;
	const dishImgSelect = (id) => {
		console.log("dish image clicked");
		dishes = DISHES.filter(dish => dish.id === id);
		console.log(dishes, "selected dish");
		setDishes(dishes);
	}
	const itemComments =(dishes) => {
		console.log(dishes, "item Comments");
		
	}
	return (
		<div>{DISHES.map((dish, key) => {
			return (
				<div key={key} onClick={() => { dishImgSelect(dish.id) }} className="dishList"  >
					<Card>
						<CardImg src={dish.image} alt="Card image cap"/>
						<CardBody>
							<CardTitle tag="h5">{dish.name}</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-muted">{dish.category}</CardSubtitle>
							<CardText>{dish.description}</CardText>
							<Button onClick={()=>itemComments(dishes)}>Button</Button>
						</CardBody>
					</Card>
				</div>
			);
		})}
		</div>
	);
}
export default Menu;