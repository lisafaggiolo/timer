

// take the nums from user
let args = process.argv;
let userNums = args.slice(2)

let filteredNums = [];


// conditions loop
for (let num in userNums){

  //switch num to number
  let parsed = parseInt(userNums[num]);
  
  //edge cases conditions
    //NaN
  if (isNaN(parsed)){
    console.log("please only imput number(s)")
    
    //negative
  } else if (Math.sign(parsed) === -1){
    console.log("Please input number(s) with a positive value."); 
    
    //puts the real num in order.
  } else {
    filteredNums.push(parsed); 
  
  }
}

// put nums in order
filteredNums.sort((a, b) => a - b);


//actual alarm loop
for (let num in filteredNums){
  // assign to alarmTime
  alarmTime = filteredNums[num] * 1000
  
  // sound at alarmTime timeout
  setTimeout(() => {
  
    process.stdout.write('*'); 
  
  }, alarmTime);

}; 