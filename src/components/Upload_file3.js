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

  if (anger == 'VERY_LIKELY'){
    
  }
  const [r, setR] = useState(false);
  
  // File content to be displayed after
  // file upload is complete
  
  useEffect(() => {

  }, [r]);
  
  return (
    <div>
        <div>
        <h1>
          {(joy == 'VERY_LIKELY')?<p><a href="https://legitimation.netlify.app">매우 행복함</a></p>:null}
          {(anger == 'VERY_LIKELY')?<p><a href="https://legitimation.netlify.app">매우 화남</a></p>:null}
          {(sorrow == 'VERY_LIKELY')?<p><a href="https://legitimation.netlify.app">매우 슬픔</a></p>:null}
          {(surprise == 'VERY_LIKELY')?<p><a href="https://legitimation.netlify.app">매우 당황함</a></p>:null}
          {(joy == 'LIKELY')?<p><a href="https://legitimation.netlify.app">행복함</a></p>:null}
          {(anger == 'LIKELY')?<p><a href="https://legitimation.netlify.app">화남</a></p>:null}
          {(sorrow == 'LIKELY')?<p><a href="https://legitimation.netlify.app">슬픔</a></p>:null}
          {(surprise == 'LIKELY')?<p><a href="https://legitimation.netlify.app">당황함</a></p>:null}
          {(joy == 'POSSIBLE')?<p><a href="https://legitimation.netlify.app">행복할수도 있음</a></p>:null}
          {(anger == 'POSSIBLE')?<p><a href="https://legitimation.netlify.app">화났을수도 있음</a></p>:null}
          {(sorrow == 'POSSIBLE')?<p><a href="https://legitimation.netlify.app">슬플수도 있음</a></p>:null}
          {(surprise == 'POSSIBLE')?<p><a href="https://legitimation.netlify.app">당황했을수도 있음</a></p>:null}
        </h1>
      </div>
      <div>
      <h2>Emotion Details</h2>
        <p>joyLikelihood: {joy}</p>
        <p>angerLikelihood: {anger}</p>
        <p>sorrowLikelihood:{sorrow}</p>
        <p>surpriseLikelihood: {surprise}</p>
        <div>
        <img src={fileURL}/>
        </div>

    </div>
    </div>
    
  );
  
}
 
export default Upload_file3;