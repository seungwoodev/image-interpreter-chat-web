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


  const [joy, setJoy] = useState({
    joy: null
  })
  const [anger, setAnger] = useState({
    anger: null
  })
  const [sorrow, setSorrow] = useState({
    sorrow: null
  })
  const [surprise, setSurprise] = useState({
    surprise: null
  })

  const[c, setC] = useState(false);

  const[state, setState] = useState({
    fullTextAnnotation: null
  })

  
  // On file convert (click the convert button)
  const onFileConvert = () => {
    document.querySelector('body').style.backgroundColor='#d64e4e';  //이부분 표정에따라 배경이 바뀌도록
    // Update the body object
    body.userId = userId;
    body.fileName = fileName;
    body.fileType = fileType;
    body.fileURL = fileURL;
  
  
    // Request made to the backend api
    // Send formData object
    console.log('body', body);

    axios.post("/convert_file", body)
    .then(function (response) {
      //handle success
      if(response.data.code == 404){
        alert('insert error in file DB')
        console.log('insert error response', response);
      }
      else if(response.data.code == 200){
        //upload success
        console.log('success response', response);
        setJoy({joy: response.data.joy});
        setAnger({anger: response.data.anger});
        setSorrow({sorrow: response.data.sorrow});
        setSurprise({surprise: response.data.surprise});
        alert('convert success');
        setC(true);
      }
      else{
        alert('response code is not correct')
        console.log('response code is not correct', response);
      }
    })
    .catch(function (response) {
      //handle error
      alert('file convert fail')
      console.log('error response', response);
    });

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
    console.log("joy", joy);
    console.log("anger", anger);
    console.log("sorrow", sorrow);
    console.log("surprise", surprise);
    
  }, [joy, anger, sorrow, surprise]);
  


  return (
    <div>
      {c?
        <Upload_file3
        userId = {userId}
        fileURL = {fileURL}
        joy = {joy.joy}
        anger = {anger.anger}
        sorrow = {sorrow.sorrow}
        surprise = {surprise.surprise}
        fullTextAnnotation = {state.fullTextAnnotation}/> :
        <div class="maindiv2">
            <h3>
            File Convert
            </h3>
            <div>
                <button onClick={onFileConvert}>
                Convert!
                </button>
            </div>
            <div>
            <h2>File Details:</h2>
                <p>File Name: {fileName}</p>
                <p>File Type: {fileType}</p>
                <p>Last Modified:{" "}
                {fileDate}</p>
                <div>
                <img src={fileURL}  height="300"/>
                </div>
            </div>
        </div>}
    </div>
  );
  
}
 
export default Upload_file2;