/**
 * Created by Forrest on 6/3/17.
 */
const express = require('express')
const router = express.Router()
const request = require("request");



router.get('/', function (req, res, next) {
    //One way to access the params is on the req.query object
    console.log("req.query: ", req.query.p1, req.query.p2)
    //send back what was received
    res.json(req.query)
})



// router.get('/[a-z].*/', function (req, res, next) {
//     console.log("matched regexp")
//     res.send("matched regexp", req.originalUrl)
// })



router.get('/:input_string', function (req, res, next) {
    let thisString = req.params.input_string
    let str_length= thisString.length;
    console.log("Saw", thisString, "a",  "in", req.originalUrl)
    res.json({"string": thisString, "length": str_length});
//    next()
})



router.param('name', function (req, res, next, value) {

    req.hw1.name += ""

    next()
})


router.post('/', function (req, res, next) {
    let thisString = req.body.string
    let str_length= thisString.length;
    console.log("Saw", thisString, "a",  "in", req.originalUrl)
    res.json({"string": thisString, "length": str_length});
//    next()
})

module.exports = router;
