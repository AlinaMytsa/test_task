'use strict';

const string = 'abc';

const getArr = (str) => {

  const arr = str.split('');
  const result = [str];

  for (let i = 0; i < arr.length - 1; i += 1){

    let copiedArr = [...arr];

    copiedArr.splice(i + 1, 0, '.');
    result.push(copiedArr.join(''))

  }

  result.push(arr.join('.'))
  return result;
}

const func = getArr(string);
console.log(func)
