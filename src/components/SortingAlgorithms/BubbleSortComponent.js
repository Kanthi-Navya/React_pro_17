import React, { useState } from 'react';
import { Button } from 'reactstrap';
const BubbleSort = () => {
    const [bubble, setbubble] = useState(null);
    var [sortedNum, setsortedNum] = useState(null)
    function SortingEle(bubble) {

        const n = bubble.length;
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
            var r = Math.floor(Math.random() * 80) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(arr);
        setbubble(arr);
    };

    return (
        <div>
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
            <button onClick={() => SortingEle(bubble)}>
                Bubbble sort
            </button>

        </div>
    );
}

export default BubbleSort;

