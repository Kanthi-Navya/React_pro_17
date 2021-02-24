import React from 'react';
// import {UserContext} from './MenuComponent';
// import { Container, Row, Col } from 'reactstrap';
// import { DISHES } from '../Dishes';

// import Menu from './MenuComponent';
// import { DISHES } from '../Dishes';
// const Dishdetail = (dish) => {
 function Dishdetail(props){
     debugger
    console.log(props.id, "dish dfetail");
    // const checkDish= ()=> {
    //     const found = DISHES.find(dishes => dishes.id === dish.id);
    //     console.log(found.id, "found an element");
    // // }
    
    return(
        <div>{props.id}</div>
    );

}
 
export default Dishdetail;