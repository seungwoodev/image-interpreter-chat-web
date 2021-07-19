const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

router.post('/', (req, res) => {

    var resultCode;
    console.log('file uploaded', req.body);
    const userId = req.body.userId;
    const fileName = req.body.fileName;
    const fileURL = req.body.fileURL;
    const fileType = req.body.fileType;
    // console.log(`= = = > req : ${util.inspect(req)}`)
    console.log('req', req);

    db.query('select user_id from user_info where user_id = ?', userId, function(err, result, fields){
        db.on('error', function(err){
            console.log('[MySQL ERROR]', err);
        });
        console.log('upload selected user id', result);
        if(result && result.length){
            db.query('insert into file(user_id, fileName, fileURL, fileType) values(?, ?, ?, ?) where not exists(select * from file where user_id = ?, fileName = ?, fileURL = ?, fileType = ?)', [result[0].user_id, fileName, fileURL, fileType, result[0].user_id, fileName, fileURL, fileType], function(err, result, fields){
                db.on('error', function(err){
                    console.log('[MySQL ERROR]', err);
                });
                if(result){
                    console.log('inserted into file', result);
                    resultCode = 200;
                }
                else{
                    console.log('already exists in file DB', result);
                    resultCode = 200;
                }
            })
        }
        else{
            console.log('no such user id', result);
            resultCode = 200;
        }
    })
    res.status(resultCode).send();

});

module.exports = router;