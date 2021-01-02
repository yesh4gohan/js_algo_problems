//How would you find the largest sum of any two elements?

const maxTwoSum = arr => {
  if(arr.length<2) return undefined;
  if(arr.length === 2) return arr[0]+arr[1]
  let biggest = arr[0];
  let second = arr[1];
  if(second>biggest){
    biggest = second;
  }
  for(let i = 2;i<arr.length;i++){
    if(arr[i]>biggest){
      second = biggest;
      biggest = arr[i]
    }
    else if(arr[i]>second) {
      second = arr[i];
    }
  }

  return biggest+second;
}

console.log(maxTwoSum([-1,-2,-3,-4,-5]))