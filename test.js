// ----- handling array in a immutable way ==============

// --------------------------- 1st --------------------------
// const arr = ["akku", "pakku", "makku"];
// console.log(arrr);

// arr.push("hakku");

// console.log(arr);

// ---------------------------- 2nd ---------------------------
// const arr = ["akku", "pakku", "makku"];
// console.log(arrr);

// arr.pop();

// console.log(arr);

// ---------------------------- 3rd ----------------------------
const arr = ["akku", "pakku", "makku"];
console.log(arr);
const arr2 = [...arr, "gulu"];
console.log(arr2);
const arr3 = arr.filter((item) => item !== "pakku");
console.log(arr3);
