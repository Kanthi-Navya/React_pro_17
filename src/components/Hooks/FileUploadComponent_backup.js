import React, { useState } from 'react';
import { Button } from 'reactstrap';
const FileUpload = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [state, setState] = useState({
		profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
	})
	
	const [formData, setFormData] = useState();
	const [isSelected, setIsSelected] = useState(false)
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
		console.log(event.target.files[0]);

	};

	const handleSubmission = (e) => {
		console.log("submit button clicked",e.target.value);
		// const fd = new FormData();
		// 	fd.append('File', selectedFile,selectedFile.name);
		// 	console.log(selectedFile);



		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setState({ profileImg: reader.result })
			}
		}
 		reader.readAsDataURL(e.target.files[0])
	};

	return (
		<div>
			<input type="file" name="file" onChange={changeHandler} id="file" />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
					<p>Select a file to show details</p>
				)}
			
				<button onClick={(e)=>handleSubmission(e)} value="submit">Submit</button>
			
		</div>
	)

}

export default FileUpload;