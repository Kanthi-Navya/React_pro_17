// import "../../images"
import React from 'react';
const Images = () => {
	var img_arr = [];
	for (var i = 1; i < 10; i++) {
		var count = i;
		img_arr.push(require(`../../images/${count}.jpeg`));
		console.log(i, "image -count");
	}
	return (
		<>
			<div>
				{img_arr.map((dish, key) => {
					return (
					 <>
						<img  width="250px" src={dish.default} alt="Card imagee cap" className="folderImg" />
					</>
					);
				})}
				
			</div>

		</>

	);

}

	
	
 
export default Images;