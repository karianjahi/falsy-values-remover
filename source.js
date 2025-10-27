/* A function that removes all falsy values from an array */
const bouncer = (array) => {
    let cleanedArray = [];
  for (let item of array) {
    // console.log(`${item} ------ ${typeof(item)}. Result is actually a ${typeof(typeof(item))}`);
    if (typeof item == "number" && isNaN(item)) {
      // getting rid of NaN Values
      ("do nothing");
    } else {
      if (
        item !== false &&
        item !== null &&
        item !== 0 &&
        item !== "" &&
        item !== undefined
      )
        cleanedArray.push(item);
    }
  }
  return cleanedArray;
}
let myArray = [
  89.5,
  91.4,
  12.3,
  false,
  7.8,
  100.9,
  "hegemony",
  "",
  "",
  "salty",
  51.7,
  NaN,
  "Shanzu",
  9.8,
  undefined,
  false,
  true,
  true,
  0,
  0,
  5.3,
];
console.log(bouncer(myArray));