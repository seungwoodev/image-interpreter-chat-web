const express = require('express');
const router = express.Router();
const db = require('../config/db');
const util = require('util');

console.log('upload_file entered');
router.post('/', (req, res) => {
    console.log(`= = = > req : ${util.inspect(req)}`)

    res.status(200).send(null);

});

module.exports = router;