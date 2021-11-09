// varは上書き、再宣言可能
// letは上書き可能
// constは上書き、再宣言不可能
// オブジェクトや配列は上書き、追加可能

/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);
// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);
// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);
// let val2 = "let変数";
// console.log(val2);
// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);
// //letは再宣言不可能
// let val2 = "let変数を再宣言";
// const val3 = "const変数";
// consolecval3);
// //const変数は上書き不可能
// //val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";
//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "わー",
//   age: 28,
// };
// val4.name = "wa-";
// val4.addres = "Japaaan";
// console.log(val4);
//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/*
 * mapやFilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);
