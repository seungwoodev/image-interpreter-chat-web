const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');


// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient();



router.post('/', (req, res) => {


    var objToSend;
    var resultCode;
    console.log('file convert', req.body);
    const userId = req.body.userId;
    const fileName = req.body.fileName;
    const fileURL = req.body.fileURL;
    const fileType = req.body.fileType;
    var emotion = '';
    // console.log(`= = = > req : ${util.inspect(req)}`)
    // console.log('req', req);

    db.query('select user_id from user_info where user_id = ?', userId, function(err, result, fields){
        db.on('error', function(err){
            console.log('[MySQL ERROR]', err);
        });
        console.log('upload selected user id', result);
        if(result && result.length){

            const [result] = client.faceDetection(fileURL);

            const faces = result.faceAnnotations;
            console.log('Faces:');
            faces.forEach((face, i) => {
            console.log(`  Face #${i + 1}:`);
            console.log(`    Joy: ${face.joyLikelihood}`);
            console.log(`    Anger: ${face.angerLikelihood}`);
            console.log(`    Sorrow: ${face.sorrowLikelihood}`);
            console.log(`    Surprise: ${face.surpriseLikelihood}`);
            });
            var joy = face.joyLikelihood;
            var anger = face.angerLikelihood;
            var sorrow = face.sorrowLikelihood;
            var surprise = face.surpriseLikelihood;

            db.query('insert ignore into emoji(user_id, emotion_joy, emotion_anger, emotion_sorrow, emotion_surprise, emojiURL) values(?, ?, ?, ?, ?, ?)', [result[0].user_id, joy, anger, sorrow, surprise, fileURL, fileType], function(err, result1, fields){
                db.on('error', function(err){
                    console.log('[MySQL ERROR]', err);
                });
                if(result1){
                    resultCode = 200;
                    console.log('inserted into emoji DB', result1);
                    objToSend = {
                        code: resultCode,
                        joy: face.joyLikelihood,
                        anger: face.angerLikelihood,
                        sorrow: face.sorrowLikelihood,
                        surprise: face.surpriseLikelihood
                    }
                    // alert('inserted into file DB');
                    res.send(objToSend);
                    
                }
                else{
                    resultCode = 404;
                    console.log('insert error in emoji DB', result1);
                    objToSend = {
                        code: resultCode,
                        joy: null,
                        anger: null,
                        sorrow: null,
                        surprise: null,
                    }
                    res.send(objToSend);
                    
                }
            })
        }
        else{
            console.log('no such user id', result);
            // alert('no such user id');
            resultCode = 404;
            objToSend = {
                code: resultCode,
                joy: null,
                anger: null,
                sorrow: null,
                surprise: null,
            }
        }
    })
    // res.status(resultCode).send();

});

module.exports = router;