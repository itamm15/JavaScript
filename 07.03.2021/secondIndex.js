function sumTwoSmallestNumbers(numbers) {  
    let najJeden = numbers[0];
    let najDwa = numbers[1];
    for(let i = 0;i<numbers.length;i++){
      if(najJeden>numbers[i]){
        najJeden = numbers[i];
      }
    }
    for(let i = 0;i<numbers.length;i++){
      if(najDwa > numbers[i]){
        if(numbers[i] == najJeden){
          
        }else{
           najDwa = numbers[i]; 
        }
      }
    }
    return najDwa + najJeden;
  }