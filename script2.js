function demeritsAwarded(){
    let speed = parseFloat(prompt("Your Speed"));// prompts the user to input his speed in km/hr.
    let speedlimit = 70;//speed higher than this warrants demerit points
   
    if (speed < 70){
      alert("OK")//system returns "OK" if the speed recorded is less than 70
      return;
    }
    else if (speed >=70 && speed <= 130 ){ 
  let demerit = Math.abs(speed-speedlimit)/5;//calculates the demerit points earned
  return alert("points:"+demerit)
    }
    else{
      alert("Licence suspended") // if the points earned surpasses 12 your licence is suspended.
      return;
  } 
    
   
  }
  
