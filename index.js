function promptingForMarks(){
    const marksInput=prompt("Entre your marks");//prompts the user to input the marks to be graded
    if (marksInput===null){
      return;// if no input is entered the system assumes that the user wants to cancel the process
    }
  let marks = parseFloat(marksInput);//const marks is created which will hold our prompted input
  if (isNaN(marks)){
      alert( "invalid argument");
      return;//if the input entered is not a number the system records "invalid argument"
  }
    let grade;//assigns grades using if...else if statements
    
    if(marks > 79){
      grade= "A";
    }
    else if (marks <= 79 && marks >= 60){
       grade = "B";
    }
    else if (marks <=59 && marks > 49){
       grade = "C";
    }
    else if (marks <= 49 && marks >= 40 ){
     grade = "D";
    }
    else {grade = "E" }
  
    alert ("Grade"+ grade);//ensures the console displays the grade 
    return grade;//ensures the values of variable grade are invoked
  }