/* Diff Two Arrays
Compare two arrays and return a new array with any items only found in one 
of the two given arrays, but not both. In other words, return the symmetric 
difference of the two arrays.

Note: You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
  let newArr = [];
  // arr1 filter
  let difference1 = arr1.filter((element) => {
    return !arr2.includes(element);
  });
  // arr2 filter
  let difference2 = arr2.filter((element) => {
    return !arr1.includes(element);
  });
  //arr concatenation
  newArr.push(...difference1, ...difference2);
  return newArr;
}

console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
