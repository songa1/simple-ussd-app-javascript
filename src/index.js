const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(5000, () => {
  console.log("listening on port 5000");
});

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  const { sessionId, sessionCode, phoneNumber, text } = req.body;

  let response = "";

  if (text == "") {
    response = `CON What would you like to do?
        
        1. My Account
        2. Check phone number`;
  } else if (text == "1") {
    response = `CON My account:
        
        1. Account Number
        2. Account Balance`;
  } else if (text == "2") {
    response = `END Your phone number is ${phoneNumber}`;
  } else if (text == "1*1") {
    const accountNumber = "AUON54252772";
    response = `END Your account number is ${accountNumber}`;
  } else if (text == "1*2") {
    const accountBalance = "40,000";
    response = `END Your account balance is RWF ${accountBalance}`;
  } else {
    response = `END Wrong choice!`;
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

module.exports = app;
