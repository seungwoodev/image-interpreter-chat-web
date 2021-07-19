import axios from 'axios';
 
import React,{Component, useState} from 'react';
 
function Upload_file(props) {
  // Main 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
	const userId = props.userId

  var body = {
    userId: null,
    fileURL: null,
    fileName: null,
    fileType: null
  }

  const [state, setState] = useState({

    // Initially, no file is selected
    selectedFile: null,
    fileURL: null
  });
  
  // On file select (from the pop up)
  const onFileChange = event => {
  
    // Update the state
    setState({ selectedFile: event.target.files[0], fileURL: URL.createObjectURL(event.target.files[0]) });
  
  };
  
  // On file upload (click the upload button)
  const onFileUpload = () => {

    // Update the body object
    body.userId = userId;
    body.fileName = state.selectedFile.name;
    body.fileType = state.selectedFile.type;
    body.fileURL = state.fileURL;
  
    // Details of the uploaded file
    console.log('uploaded File',state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    console.log('body', body);
    axios.post("/upload_file", body);
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
            <p>Last Modified:{" "}
            {state.selectedFile.lastModifiedDate.toDateString()}</p>
            <div>
            <img src={state.fileURL}/>
            </div>

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