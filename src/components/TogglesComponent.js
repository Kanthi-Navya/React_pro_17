import React, { useState } from 'react';
import {Button} from 'reactstrap';
import Game from './Game/GameComponent';
import Calculator from './calculator/CalculatorComponent';
import Images from './AddjsonData/ImagesComponent';
const Toggles = () => {
    var result;
    const [toggleState, setToggleState] = useState("game");
    
    function toggle () {
        
        setToggleState(toggleState === "game" ? "page" : "game");
        console.log(toggleState);
   }

    return ( 
       
        <div>
             <Button onClick={toggle}>{toggleState}</Button>
            {toggleState === "game" ? <Game /> : <Calculator /> } 
      </div>
        );
}
 
export default Toggles;