export const permute = (inputArr) => {
    let returnArr = [];
  
    for (let i = 0; i < inputArr.length; i = i + 1) {
      let rest = permute(inputArr.slice(0, i).concat(inputArr.slice(i + 1)));
  
      if(!rest.length) {
        returnArr.push([inputArr[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
            returnArr.push([inputArr[i]].concat(rest[j]))
        }
      }
    }
    return returnArr;
}