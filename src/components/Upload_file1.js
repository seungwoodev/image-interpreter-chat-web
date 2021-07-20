import axios from 'axios';
 
import React,{Component, useEffect, useState} from 'react';
import Upload_file2 from './Upload_file2';
 
function Upload_file1({userId, fileURL, fileName, fileType, fileDate, Base64}) {
  // Main 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.

  var userId = {userId}.userId;
  var fileURL = {fileURL}.fileURL;
  var fileName = {fileName}.fileName;
  var fileType = {fileType}.fileType;
  var fileDate = {fileDate}.fileDate;
  var Base64 = {Base64}.Base64;

  console.log('fileURL', fileURL.fileURL);
  console.log('fileName', fileName);
  console.log('fileType', fileType)
  var body = {
    userId: null,
    fileURL: null,
    fileName: null,
    fileType: null
  }

  const[u, setU] = useState(false);
  
  
  // On file upload (click the upload button)
  const onFileUpload = () => {

    // Update the body object
    body.userId = userId;
    body.fileName = fileName;
    body.fileType = fileType;
    body.fileURL = fileURL;
  
    // Request made to the backend api
    // Send formData object
    console.log('body', body);
    axios.post("/upload_file", body)
    .then(function (response) {
      //handle success
      if(response.data.code == 404){
        alert('insert error in file DB')
        console.log('insert error response', response);
      }
      else if(response.data.code == 200){
        //upload success
        alert('file upload success')
        console.log('success response', response);
        setU(true);
      }
      else{
        alert('response code is not correct')
        console.log('response code is not correct', response);
      }
    })
    .catch(function (response) {
      //handle error
      alert('file upload fail')
      console.log('error response', response);
    });
    
  };
  

  // File content to be displayed after
  // file upload is complete
  
  useEffect(() => {
    
}, [u]);
  
  return (
    <div>
      {u?
        <Upload_file2 userId = {userId} fileURL = {fileURL}  fileName = {fileName} fileType = {fileType} fileDate = {fileDate} Base64 = {Base64}/> :
        <div>
            <h3>
                File Upload
            </h3>
            <div>
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            <div>
            <h2>File Details:</h2>
                <p>File Name: {fileName}</p>
                <p>File Type: {fileType}</p>
                <p>Last Modified:{" "}
                {fileDate}</p>
                <div>
                <img src={fileURL}/>
                </div>
            </div>
        </div>}
    </div>
  );
  
}
 
export default Upload_file1;