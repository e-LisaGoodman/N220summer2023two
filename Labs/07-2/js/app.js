//Tip calculator
//Make a page with one input and one button. 
//When the button is clicked (assuming the value typed into the input is numerical), 
//calculate both the tip and the full value of the bill to be paid. 
//Output both to the console, formatted as such: "Tip: $X. Total: $X" 


let bill = document.getElementById("totalBill");
let dvTip = document.getElementById("tip");
let dvTotal = document.getElementById("total");

//dvTip.innerHTML = `Tip: $${dvTip}`;
//dvTotal.innerHTML = "Total:";

//Calculate Tip
function calc(){
    //20% tip calculation
    dvTip = (bill.value * 0.2);
    console.log(`Tip: $${dvTip}`)
    //Add tip to bill for total
    dvTotal = (Number(bill.value) + Number(dvTip));
    console.log(`Total: $${dvTotal}`);
     //print to screen **NOT WORKING**
    dvTip.innerHTML = `Tip: $${dvTip}`;
    dvTotal.innerHTML = `Total: $${dvTotal}`;
   
}
