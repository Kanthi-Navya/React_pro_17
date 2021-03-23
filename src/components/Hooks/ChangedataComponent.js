import React, { useState } from 'react';
import {Button} from 'reactstrap';
const Changedata = () => {
var stat;
    const [status, setStatus] = useState([
        {
            id: 1,
            name: "shailaja",
            img: "https://lh3.googleusercontent.com/ogw/ADGmqu8CYxPjQKDNTrJH4W2JDelJd0ObLlcxq5pBagbaAw=s32-c-mo",
            username: "shailaja-dhyade", 
            update: "Follow"}
        , 
        { 
            id: 2, 
            name: "Dan Abramov", 
            img: "https://avatars0.githubusercontent.com/u/810438?v=4", 
            username: "shailaja-dhyade", 
            update: "Following" 
        }
    ]);
    const updateStatus=(value) => {
        stat = value.update;
        console.log(stat);
        
        setStatus()
        
        
        
    }
    return(
       
        status.map((value)=>{
            
            return ( 
        
                <div>
                    <Button onClick={()=> updateStatus(value)} key={value.id}>{value.update}</Button>
                </div>
             );
             
        })
       
    );

    
}
 
export default Changedata;