import axios from 'axios';
 
import React,{Component, useEffect, useState} from 'react';
 
function Upload_file3({userId, fileURL, joy, anger, sorrow, surprise, fullTextAnnotation}) {
  // Main 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
	
  var userId = {userId}.userId;
  var fileURL = {fileURL}.fileURL;
  var joy = {joy}.joy;
  var anger = {anger}.anger;
  var sorrow = {sorrow}.sorrow;
  var surprise = {surprise}.surprise;
  var fullTextAnnotation = {fullTextAnnotation}.fullTextAnnotation;

  const [r, setR] = useState(false);
  
  // File content to be displayed after
  // file upload is complete
  
  useEffect(() => {

  }, [r]);
  
  return (
    <div>
    <h2>Emotion Details</h2>
      <p>joyLikelihood: {joy}</p>
      <p>angerLikelihood: {anger}</p>
      <p>sorrowLikelihood:{sorrow}</p>
      <p>surpriseLikelihood: {surprise}</p>
      <p>fullTextAnnotation: {fullTextAnnotation}</p>
      <div>
      <img src={fileURL}/>
      </div>

  </div>
  );
  
}
 
export default Upload_file3;