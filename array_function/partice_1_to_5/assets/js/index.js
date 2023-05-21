// BTVN: Array + Function
var foods = ["Pizza", "Pho Bo", "Ramen", "Sushi", "Banh My"];

// 1. Sap xep tang dan va giam dan theo so luong ky tu

// Sắp xếp tăng dần
// function sortUpAscending(arr) {
//   arr.sort((a, b) => {
//     return a.length - b.length;
//   });
// }
// sortUpAscending(foods);
// console.log(foods);

// Sắp xếp giảm dần
// function sortDescending(arr) {
//   arr.sort((a, b) => {
//     if (a.length < b.length) return 1;
//     else if (a.length > b.length) return -1;
//     else return 0;
//   });
// }
// sortDescending(foods);
// console.log(foods);

// ====================================================================

// 2. Bien doi mang sang dang: "Pizza" => "Pizza - 5"
// function arrayTransform(arr) {
//   for (let i in arr) {
//     arr[i] += ` - ${arr[i].length}`;
//   }
// }

// arrayTransform(foods);
// console.log(foods);

// ====================================================================

// 3. Nhap vao cac mon ban thich: "Mi Tom, Keo bong" => Them cac mon tu format tren vao mang
// function addElemToArray(elements, arr) {
//   arr.push(...elements.split(", "));
// }

// addElemToArray("mi tom, keo bong", foods);
// console.log(foods);

// ====================================================================

// 4. Tao mot mang moi gom cac mon chua chu "a"
// function arrayContainingTheCharacterA(arr) {
//   const newArr = [];
//   for (let el of arr) {
//     if (el.includes("a")) {
//       newArr.push(el);
//     }
//   }

//   return newArr;
// }
// console.log(arrayContainingTheCharacterA(foods));

// ====================================================================

// 5. Tim nhung mon chua 5 ky tu
// function elemFiveCharacter(arr) {
//   const result = [];
//   for (let i of arr) {
//     if (i.length == 5) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(elemFiveCharacter(foods));
