const express = require('express');
const router = express.Router();
const db = require('../config/db');
const fs = require('fs')
const request = require('request');
const fetch = require("node-fetch");


// var download = function(uri, filename, callback){
//     request.head(uri, function(err, res, body){
//         // console.log('content-type:', res.headers['content-type']);
//         // console.log('content-length:', res.headers['content-length']);
        
//         request(uri).pipe(fs.createWriteStream('../files/'+filename)).on('close', callback);
//     });
// };

router.post('/', (req, res) => {


    var objToSend;
    var resultCode;
    var v
    console.log('file uploaded', req.body);
    const userId = req.body.userId;
    const fileName = req.body.fileName;
    const fileURL = req.body.fileURL;
    const fileType = req.body.fileType;
    // console.log(`= = = > req : ${util.inspect(req)}`)
    // console.log('req', req);

    db.query('select user_id from user_info where user_id = ?', userId, function(err, result, fields){
        db.on('error', function(err){
            console.log('[MySQL ERROR]', err);
        });
        console.log('upload selected user id', result);
        if(result && result.length){

            // download image from url
            // download(fileURL, fileName, function(){
            //     console.log('file download from url done');
            // });
            // let blob = fetch(fileURL).then(r => r.blob());

            db.query('insert ignore into file(user_id, fileName, fileURL, fileType) values(?, ?, ?, ?)', [result[0].user_id, fileName, fileURL, fileType], function(err, result1, fields){
                db.on('error', function(err){
                    console.log('[MySQL ERROR]', err);
                });
                if(result1){
                    resultCode = 200;
                    console.log('inserted into file DB', result1);
                    objToSend = {
                        code: resultCode,
                        fileURL: fileURL
                    }
                    // alert('inserted into file DB');
                    res.send(objToSend);
                    
                }
                else{
                    resultCode = 404;
                    console.log('insert error in file DB', result1);
                    objToSend = {
                        code: resultCode,
                        fileURL: fileURL
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
                fileURL: fileURL
            }
        }
    })
    // res.status(resultCode).send();

});

module.exports = router;