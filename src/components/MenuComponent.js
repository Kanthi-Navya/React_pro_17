import React from 'react';
// import { useState } from 'react';

import { DISHES } from '../Dishes';
import { Container, Row, Col, Button } from 'reactstrap';
import Dishdetail from './DishdetailComponent';
import BubbleSort from './SortingAlgorithms/BubbleSortComponent'
// import { CardImg } from 'reactstrap';

// import { useState } from 'react';

const Menu = () => {
    console.log("menu component");
   var selectedDish;

const dishImgSelect = (id) => {
    console.log("dish image clicked");
     selectedDish = DISHES.filter(dish => dish.id === id);
    console.log(selectedDish[0], "selected dish");
    
}
// console.log(selectedDish, "kdjgh----");
const sorting =() => {
    console.log("button clicked");
    return (
        <BubbleSort /> 

    );
}
   
return(
<>
    <div>
       <Button onClick={sorting}>
          
       </Button>
    </div>
<div>{DISHES.map((dish, key) => {
    return(
        <div>
            
     <Container>
          <div key={key} className="dishesRow shadow-lg p-3 mb-5 bg-light rounded"  onClick= {() => {dishImgSelect(dish.id)}}  >
            <Row>
                <Col xs="3" sm="3">{dish.id} </Col>
                <Col xs="3" sm="3">{dish.category} </Col>
                <Col xs="3" sm="3"> {dish.description} </Col>

                <Col xs="3" sm="3">
                    <img width="250px" src={dish.image} alt="Card imagee cap" />
                </Col>
                {/* <CardImg width="10%" height="250px" src={dish.image} alt={dish.name} /> */}
                <hr/>
            </Row>
        </div>
        <div>
        
        </div>
        
     </Container>
   <div>
     {selectedDish && <Dishdetail selectedDish={selectedDish}/>}
   </div> 
     </div>

     );
    
})}
</div> 

{/* <div onClick={() =>setDishes(dish) }>
    <Dishdetail dish={dish}/>
</div> */}

</>

);
    
}
 
export default Menu;