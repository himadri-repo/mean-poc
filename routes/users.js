var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(['respond with a resource']);
  res.send([{
    "Name": "Himadri",
    "Department": "BDGS",
    "Salary": 10000,
    "EmployeeID": "EGIL058012"
  }, {
    "Name": "Naresh",
    "Department": "BMAS",
    "Salary": 110000,
    "EmployeeID": "EGIL052014"
  }, {
    "Name": "Pankaj",
    "Department": "BNMS",
    "Salary": 25000,
    "EmployeeID": "EGIL158116"
  }, {
    "Name": "Alok",
    "Department": "BDGS",
    "Salary": 35000,
    "EmployeeID": "EGIL051065"
  }]);
});

module.exports = router;
