'use strict';

const string = 'abc';

const getArr = (str) => {

  let arr = [];

  if (str.length <= 1){
    return str
  }

  for (let i of getArr(str.slice(1))) {
    arr.push(str[0] + i);
    arr.push(str[0] + '.' + i);
  }
return arr;
}

const func = getArr(string);
console.log(func)
