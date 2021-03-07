let number = 123456;
number = number.toString();
const arr = new Array(number.length);

for(let i = 0;i<arr.length;i++){
    arr[i] = number[i];
}
arr.sort().reverse();

const result = arr.map(function(x){
    return parseInt(x,10);
});

console.log(result);