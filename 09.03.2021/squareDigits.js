function squareDigits(num){
    let array = [];
    let act = num.toString();
    for(let i = 0;i<act.length;i++){
      let tmp = act[i];
      parseInt(tmp);
      array.push(tmp*tmp);
    }
    let result = array.join("");
    const resultInt = parseInt(result);
    return resultInt;
  }