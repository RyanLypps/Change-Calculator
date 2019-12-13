// Write your JavaScript here
function clickHandleEvent() {
    var inputAmtDue = document.getElementById("amount-due").value;
    var inputAmtRec = document.getElementById("amount-received").value;
    var resultValue = inputAmtRec - inputAmtDue;
    var changeValue = [1.00, 0.25, 0.10, 0.05, 0.01];
    var storageForChange = [];
    var dollarAmt = document.createTextNode("Dollars");
    var quarterAmt = document.createTextNode("Quarters");
    var dimeAmt = document.createTextNode("Dimes");
    var nickelAmt = document.createTextNode("Nickels")
    var pennyAmt = document.createTextNode("Pennies");

   document.getElementById("dollar-heading").innerHTML = " ";
   document.getElementById("quarters-heading").innerHTML = " ";
   document.getElementById("dimes-heading").innerHTML = " ";
   document.getElementById("nickels-heading").innerHTML = " ";
   document.getElementById("pennies-heading").innerHTML = " ";

 // If statement checks to see if there is change.
    if (Math.sign(resultValue) == 1) {
       // Iterates thru to calculate change from inputed amount.
        for(i=0; i < changeValue.length; i++) {
            var changeAmount = resultValue / changeValue[i];
            resultValue = resultValue % changeValue[i];
            storageForChange.push(changeAmount);
        }
        // Prints it out to the screen.
        document.getElementById("dollars-output").innerHTML = Math.floor(storageForChange[0]);
        document.getElementById("quarters-output").innerHTML = Math.floor(storageForChange[1]);
        document.getElementById("dimes-output").innerHTML = Math.floor(storageForChange[2]);
        document.getElementById("nickels-output").innerHTML = Math.floor(storageForChange[3]);
        document.getElementById("pennies-output").innerHTML = Math.round(storageForChange[4]);
        document.getElementById("dollar-heading").appendChild(dollarAmt);
        document.getElementById("quarters-heading").appendChild(quarterAmt);
        document.getElementById("dimes-heading").appendChild(dimeAmt);
        document.getElementById("nickels-heading").appendChild(nickelAmt);
        document.getElementById("pennies-heading").appendChild(pennyAmt);
    }  
    // If they don't enter enough.
    else if (Math.sign(resultValue) == -1) {
       var wrong = "You didn't pay enough to acquire change! Owe: " + Math.abs(resultValue);
       document.getElementById("dollars-output").innerHTML = wrong;
    }
}
   