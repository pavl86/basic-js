module.exports = function countCats(arr) {
  let newArr = [];
  let newCountCats = arr.flat(5);
  const element = "^^";
  let idx = newCountCats.indexOf(element);
  console.log(idx);
  let result = 0;

  if (idx == -1) {
    result = 0;
  } else {
    while (idx != -1) {
      newArr.push(idx);
      idx = newCountCats.indexOf(element, idx + 1);
    }
    result = newArr.length; 
  }
  return result;
}