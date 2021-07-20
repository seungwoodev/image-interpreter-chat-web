const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');




router.post('/', (req, res) => {


    var objToSend;
    var resultCode = 200;
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


            // Imports the Google Cloud client library
            const vision = require('@google-cloud/vision');
            // Creates a client
            const client = new vision.ImageAnnotatorClient();
            // console.log('client', client);
            
            const filePath = '/Users/seungwoo/Desktop/madcamp/project3/REACTBOARD/server/files/' + fileName;
            var joy;
            var anger;
            var sorrow;
            var surprise;
            async function detectFaces() {
                /**
                 * TODO(developer): Uncomment the following line before running the sample.
                 */
                // const fileName = 'Local image file, e.g. /path/to/image.png';
              
                const [result] = await client.faceDetection(filePath);
                const faces = result.faceAnnotations;
                console.log('Faces:');
                faces.forEach((face, i) => {
                  console.log(`  Face #${i + 1}:`);
                  console.log(`    Joy: ${face.joyLikelihood}`);
                  console.log(`    Anger: ${face.angerLikelihood}`);
                  console.log(`    Sorrow: ${face.sorrowLikelihood}`);
                  console.log(`    Surprise: ${face.surpriseLikelihood}`);
                  joy = face.joyLikelihood;
                  anger = face.angerLikelihood;
                  sorrow = face.sorrowLikelihood;
                  surprise = face.surpriseLikelihood;
                  objToSend = {
                    code: resultCode,
                    joy: joy,
                    anger: anger,
                    sorrow: sorrow,
                    surprise: surprise
                    
                }
                console.log("object send convert", objToSend);
                
                // alert('inserted into file DB');
                res.send(objToSend);
                });
                // var joy = face.joyLikelihood;
                // var anger = face.angerLikelihood;
                // var sorrow = face.sorrowLikelihood;
                // var surprise = face.surpriseLikelihood;
              }
            detectFaces();

            
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