import React, { useState } from 'react';
const FileUpload = () => {

 const [state, setState] = useState({
    file: '',imagePreviewUrl: ''
 })
    const handleSubmit=(e) =>{
        e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', state);
    }


    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file,"event target file");
        
        reader.onloadend = () => {
            setState({file: file, imagePreviewUrl: reader.result})
        }

        reader.readAsDataURL(file)
        console.log(state, "handle image change--input");
    }
    let {imagePreviewUrl} = state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} className="imgPreview" /> );
       
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className="fileInput"
                    type="file"
                    onChange={(e) => handleImageChange(e)} />
                <button className="submitButton"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}>Upload Image</button>
            </form>
            <div  >
            
                {$imagePreview}
            
                <div>
					<p>Filename: {state.file.name}</p>
					<p>Filetype: {state.file.type}</p>
					<p>Size in bytes: {state.file.size}</p>
					{/* <p>
						lastModifiedDate:{' '}
						{state.file.lastModifiedDate.toLocaleDateString()}
					</p> */}
				</div>
                
            </div>
        </div>
    );
}

export default FileUpload;