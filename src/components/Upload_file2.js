import axios from 'axios';
 
import React,{Component, useEffect, useState} from 'react';
import Upload_file3 from './Upload_file3';

import vision from "react-cloud-vision-api";
 
function Upload_file2({userId, fileURL, fileName, fileType, fileDate, Base64}) {
  // Main 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
  var userId = {userId}.userId;
  var fileURL = {fileURL}.fileURL;
  var fileName = {fileName}.fileName;
  var fileType = {fileType}.fileType;
  var fileDate = {fileDate}.fileDate;
  var base64Img = {Base64}.Base64;

  var body = {
    userId: null,
    fileURL: null,
    fileName: null,
    fileType: null
  }
  var joy = null;
  var anger = null;
  var sorrow = null;
  var surprise = null;

  const[c, setC] = useState(false);


  
  // On file convert (click the convert button)
  const onFileConvert = () => {

    // Update the body object
    body.userId = userId;
    body.fileName = fileName;
    body.fileType = fileType;
    body.fileURL = fileURL;
  
  
    // Request made to the backend api
    // Send formData object
    console.log('body', body);

    const vision = require('react-cloud-vision-api')
    vision.init({auth: '8e46018d1e1ad13f5c2290b112825c6b5084160a'})
    const req = new vision.Request({
    image: new vision.Image({
        base64: base64Img,
    }),
    features: [
        new vision.Feature('TEXT_DETECTION', 4),
        new vision.Feature('LABEL_DETECTION', 10),
    ]
    })
    console.log('features', req.features);
    

    // axios.post("/convert_file", body)
    // .then(function (response) {
    //   //handle success
    //   if(response.data.code == 404){
    //     alert('insert error in file DB')
    //     console.log('insert error response', response);
    //   }
    //   else if(response.data.code == 200){
    //     //convert success
    //     alert('file convert success')
    //     console.log('success response', response);
    //     joy = response.data.joy;
    //     anger = response.data.anger;
    //     sorrow = response.data.sorrow;
    //     surprise = response.data.surprise;
    //     setC(true);
    //   }
    //   else{
    //     alert('response code is not correct')
    //     console.log('response code is not correct', response);
    //   }
    // })
    // .catch(function (response) {
    //   //handle error
    //   alert('file upload fail')
    //   console.log('error response', response);
    // });
  };

  // File content to be displayed after
  // file upload is complete
  
  useEffect(() => {
    
  }, [c]);
  


  return (
    <div>
      {c?
        <Upload_file3
        userId = {userId}
        fileURL = {fileURL}
        joy = {response.data.joy}
        anger = {response.data.anger}
        sorrow = {response.data.sorrow}
        surprise = {response.data.surprise}/> :
        <div>
            <h3>
            File Convert
            </h3>
            <div>
                <button onClick={onFileConvert}>
                Convert!
                </button>
            </div>
        </div>}
    </div>
  );
  
}
 
export default Upload_file2;