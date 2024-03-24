
    function gross(){//function that will display one's gross salary after it takes in basic salary and benefits an individual earns
      let bs = parseFloat(prompt("Basic Salary"));//allows the user to put in their basic salary
      let benefits= parseFloat(prompt("Benefits Received"));//allows the user to put in the total sum of the benefits they receive
      let grossSalary = bs + benefits; //variable that holds the value of one's basic salary and benefits
      alert (grossSalary)//displays function gross()
      return grossSalary// invokes function alert()
    }
    function Paye(){ //function that will calculate the value of one's PAYE after taking in basic salary and benefits earned as inputs
      let bs = parseFloat(prompt("Basic Salary"));
      let benefits= parseFloat(prompt("Benefits Received"));
      let grossPay = bs + benefits;
let PAYE;// is the variable that will be the placeholder of the arithmetic operations that will be under this function
  if (grossPay <= 24000){
    PAYE = grossPay*0.1;
  }
  else if (grossPay > 24000 && grossPay <= 32333){
    PAYE=grossPay*0.25;
  }
  else if (grossPay >32333 && grossPay <= 500000){
    PAYE= grossPay*0.3;
  }
  else if (grossPay >500000 && grossPay <= 800000){
    PAYE = grossPay*0.325;
  }
  else{
    PAYE= grossPay*0.35
  }
  alert (PAYE) // displays function Paye()
return PAYE;//invokes function alert()
}
function Nhif(){//it calculates NHIF after taking in basic salary and benefits as inputs
  let bs = parseFloat(prompt("Basic Salary"));//allows the user to put in their baic salary
      let benefits= parseFloat(prompt("Benefits Received"));//alllows the user to put i the benefits that they earn
  
      let grossPay= bs + benefits;
      let NHIF;//variable that will be the placeholder for function Nhif()
if (grossPay <= 5999){
  NHIF = 150;
}
else if(grossPay >= 6000 && grossPay <= 7999){
  NHIF = 300;
}
else if (grossPay >= 8000 && grossPay <= 11999){
  NHIF = 400;
}
else if (grossPay >= 12000 && grossPay <= 14999){
  NHIF= 500;
}
else if (grossPay >= 15000 && grossPay <=19999){
  NHIF = 600;
}
else if (grossPay >= 20000 && grossPay <= 24999){
  NHIF= 750;
}
else if (grossPay >= 25000 && grossPay <= 29999){
  NHIF= 850;
}
else if (grossPay >= 30000 && grossPay <= 34999){
  NHIF = 900;
}
else if (grossPay >= 35000 && grossPay <= 39999){
  NHIF= 950;
}
else if (grossPay >= 40000 && grossPay <= 44999){
  NHIF = 1000;
}
else if (grossPay >= 45000 && grossPay <= 49999){
  NHIF = 1100;
}
else if (grossPay >= 50000 && grossPay <= 59999){
  NHIF = 1200;
}
else if (grossPay >= 60000 && grossPay <= 69999){
  NHIF =1300;
}
else if (grossPay >= 70000 && grossPay <= 79999){
  NHIF = 1400;
}
else if (grossPay >= 80000 && grossPay <= 89999){
  NHIF = 1500;
}
else if (grossPay >= 90000 && grossPay <= 99999){
  NHIF = 1600;
}
else {
  NHIF = 1700;
}
alert (NHIF);//displays the function Nhif();
}
 function Nssf(){// this function calculates the amount deducted as NSSF
  let bs = parseFloat(prompt("Basic Salary"));
      let benefits= parseFloat(prompt("Benefits Received"));
      let grossPay= bs + benefits;//PLACEHOLDER FOR THE GROSS SALARY WHICH IS ESSENTIAL FOR OUR EQUATION
  const maxNSSF=7000;// indicates the maximum amount of NSSF that an individual should be charged 
  let NSSF = grossPay*0.06;//the arithmetic equation that will get the NSSF an individual is charged
  
  
  if (NSSF > maxNSSF){// ensures that no one is charged above our maximum value which is 7000
    alert ("7000");//displays maximum value allowed 
    return;//invokes the alert function
  }
  alert (NSSF);
  return NSSF;
 }
 function deduct(){//function that sums up our total deductions
  let paye=parseFloat(prompt("PAYE DEDUCTIONS"));//takes input of the PAYE deductions an individual has incurred
  let nhif=parseFloat(prompt("NHIF DEDUCTIONS"));//takes input of the NHIF  deductions an individual has incurred
  let nssf=parseFloat(prompt("NSSF DEDUCTIONS"));//takes input of the NSSF deductions an individual has incurred
  let deductions = paye + nhif + nssf ;
  alert (deductions);//invokes function deduct()
  return deductions;//invokes function alert()
 }
 function net(){//function that calculates the net salary of an individual 
  let grosss=parseFloat(prompt("GROSS SALARY"));//takes in the gross salary earned by an individual
  let nets=parseFloat(prompt("TOTAL DEDUCTIONS"));//taks in the total deductions that an individual has
  let netSalary = grosss - nets;// gets the net salary of an individual which is gross salary - total deductions
  alert (netSalary);//displays net() function
  return netSalary;// invokes function alert()
 }
    
 