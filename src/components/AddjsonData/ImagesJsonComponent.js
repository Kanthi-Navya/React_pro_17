import React, { useState,useEffect } from 'react';
// import JsonList from '../AddjsonData/JsonListComponent';


const ImagesJson = () => {
    const [imgDetail, setimgDetail] = useState(null);
    const JsonList = (ListDetails) => {
        console.log(ListDetails.imgDetail, "image Details");
        return (
            <>
						<div className="bdy">
                {ListDetails.imgDetail.map((jsonData, key) => {
                    return (
                        <div class="col-sm-4" className="width1">
                           
                                <div key={key} >
                                    <h5>{jsonData.author}</h5>
																		<p>{jsonData.author_url}</p>
																		<img src={jsonData.author_url} alt="not found"/>
                                </div>
                           
                        </div>
                    );
                })}
                </div>
            </>
        );
    }
   
    useEffect(() => {
		fetch('http://localhost:8000/Images')
		.then(response => response.json())
		 .then((data)=>{
			// console.log(data);
			setimgDetail(data);
		})
	},[]);
    return ( 
        <div>
         {imgDetail && <JsonList imgDetail={imgDetail} />}   
        </div>
     );
}
 
export default ImagesJson;