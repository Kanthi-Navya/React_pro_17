import React, {  useState} from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:5003/';

const FilesUpload =() => {
    const [state, setState] = useState({
        images: [],
        imageUrls: [],
        message: ''
    })
    
  const selectImages = (event) => {
        let images = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        debugger
        console.log(event.target, "event -- taeget");
        
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif|PNG)$/))
        let message = `${images.length} valid image(s) selected`
        setState({ images, message })
    }

  const uploadImages = () => {
      debugger
        const uploaders = state.images.map(image => {
            const data = new FormData();
            data.append("image", image, image.name);

            // Make an AJAX upload request using Axios
            return axios.post(BASE_URL, data)
                .then(response => {
                    // this.setState({
                    //     imageUrls: [response.data.imageUrl, ...this.state.imageUrls]
                    // });
                    console.log(response, "response")
                    setState({
                        imageUrls: [response.data.imageUrl]
                    })
                    
                    
                })
              
        });
        
       
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log('done');
        }).catch(err => alert(err.message));
        
        console.log(state, "state ");
    }
    
    

        return (
            <div>
                <br />
                <div className="col-sm-12">
                    <h1>Image Uploader</h1><hr />
                    <div className="col-sm-4">
                        <input className="form-control " type="file"
                            onChange={selectImages} multiple />
                    </div>
                    <p className="text-info">{state.message}</p>
                    <br /><br /><br />
                    <div className="col-sm-4">
                        <button className="btn btn-primary" value="Submit"
                            onClick={uploadImages}>Submit</button>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><hr /><br />
                <div className="row col-lg-12">
                    { state.images.map((url, i) => (
                            <div className="col-lg-2" key={i}>
                                <img src={BASE_URL + url} className="img-rounded img-responsive"
                                    alt="not available" /><br />
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        );
   
}
export default FilesUpload;
