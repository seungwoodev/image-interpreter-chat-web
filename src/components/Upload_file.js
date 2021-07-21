import axios from 'axios';
 
import React,{Component, useEffect, useState} from 'react';
import Upload_file1 from './Upload_file1';
import uploadimageicon from './images/upload-pictures-icon.png'
import ImageUploader from "react-images-upload";
import './Upload_file.css'

 
function Upload_file(props) {
  // Main 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
	const userId = props.userId;


  const [f, setF] = useState({
    Base64: null,
    fileURL: null,
    fileName: null,
    fileType: null,
    fileDate: null
  })
  console.log('f object', f);

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    return reader.result;
 }

  // On file select (from the pop up)
  const onFileChange = event => {
    var Base64 = getBase64(event.target.files[0]);


    setF({Base64: Base64, fileURL: URL.createObjectURL(event.target.files[0]), fileName: event.target.files[0].name, fileType: event.target.files[0].type, fileDate: event.target.files[0].lastModifiedDate.toDateString()});
    console.log('Base64', Base64);
    console.log('fileName', event.target.files[0].name);
    console.log('fileType', event.target.files[0].type);
    console.log('fileDate', event.target.files[0].lastModifiedDate.toDateString());
  };
   
  // File content to be displayed after
  // file upload is complete
  
  useEffect(() => {
    
  }, [f]);


  console.log('fileURL2', f.fileURL);
  console.log('fileName2', f.fileName);
  return(
    <div>
      {(!!(f.fileURL))?
        <Upload_file1 userId = {userId} fileURL = {f.fileURL}  fileName = {f.fileName} fileType = {f.fileType} fileDate = {f.fileDate} Base64 = {f.Base64}/> :
          <div class="maindiv">
            <div class="mb-3">
            <h3>
            Select File
            </h3>
            <div>
              <img src={uploadimageicon} width="150" height="150"/>
            </div>
            <div  class="input">
                <input type="file" onChange={onFileChange} />
            </div>
            </div>
          </div>
          }
          
    </div>
  );
  
}
 
export default Upload_file;