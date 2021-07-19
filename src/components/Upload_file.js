import axios from 'axios';
 
import React,{Component, useState} from 'react';
 
function Upload_file() {
  
    const [state, setState] = useState({
 
      // Initially, no file is selected
      selectedFile: null
    });
    
    // On file select (from the pop up)
    const onFileChange = event => {
    
      // Update the state
      setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    const onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        state.selectedFile,
        state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      console.log('formData', formData);
      axios.post("/upload_file", formData);
    };
    
    // File content to be displayed after
    // file upload is complete
    const fileData = () => {
    
      if (state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
<p>File Name: {state.selectedFile.name}</p>
 
             
<p>File Type: {state.selectedFile.type}</p>
 
             
<p>
              Last Modified:{" "}
              {state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
    
      return (
        <div>
            <h3>
              File Upload
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                  Upload!
                </button>
            </div>
          {fileData()}
        </div>
      );
  }
 
  export default Upload_file;