import React, { useState } from 'react';
import { Button } from 'reactstrap';

const BubbleSort = () => {
    var n;
    const [bubble, setbubble] = useState(null);
    var [sortedNum, setsortedNum] = useState(null)
    // var [quicksort, setquicksort] = useState(null)
    function SortingEle(bubble) {

         n = bubble.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (bubble[i] > bubble[j]) {
                    var t = bubble[i];
                    bubble[i] = bubble[j];
                    bubble[j] = t;
                }
            }
        }

        sortedNum = bubble;
        setsortedNum(sortedNum);
    }
    const Sort = () => {
        var arr = [];
        while (arr.length < 10) {
            var r = Math.floor(Math.random() * 100) + 1;
            if(r < 10) {
                r = "0"+r;
            }
            console.log(r, "r value");
            
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(arr);
        setbubble(arr);
        
    };
    const Placbuttons= () =>{
        debugger
        return(
            <div>
            <button onClick={() => SortingEle(bubble)}>
                    Bubbble sort
                </button>
                <button onClick={() => QuickSorrAlg(bubble)}>
                    QuickSort
                </button>
            </div>
        );
    }
    const QuickSorrAlg=(bubble) => {
      console.log(bubble);
      console.log(bubble.sort(),  "bubble sorting");
      sortedNum = bubble.sort();
      setsortedNum(sortedNum);
    };
    const ReduceFunctionSum = (props) => {
       console.log(props.numSum, "num sum");
       var sum =0;
       props.numSum.map((number) => sum= sum + parseInt(number)  );
        
       return(
        <div className="total">
            total : 
            <span className="shadow-box-example z-depth-5">
                {sum}
            </span>

        </div>
       );
        
    };
    return (
        <div className="sorting-styling">
            <Button onClick={Sort}>
                Elements
           </Button>

            <div>
                {bubble && bubble.map((number) =>
                    <li key={number.toString()}>
                        {number}
                    </li>
                )}
           
            </div>
            {bubble && <Placbuttons />}
            {bubble && <ReduceFunctionSum numSum={bubble} />}
        </div>
    );
}

export default BubbleSort;

