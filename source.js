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