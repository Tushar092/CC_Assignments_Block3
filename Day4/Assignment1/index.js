const outerFunction = () => {
  var message =
    "This message is inside outerFunction. It will demonstrate closure property in JS";
    return displayMessage = () => {
        console.log(message);
    }
};

let displayMessageFunction = outerFunction();

displayMessageFunction();
