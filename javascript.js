// 4人分の人物オブジェクトを配列に格納
const people = [
  { name: "太郎", age: 17 },   // 未成年
  { name: "花子", age: 22 },   // 成人
  { name: "次郎", age: 19 },   // 未成年
  { name: "三郎", age: 25 }    // 成人
];

// for ループで配列を回す
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  let message = `${person.name}さんの年齢は${person.age}歳です。`;

  // 20歳判定
  if (person.age < 20) {
    message += `20歳まで${20 - person.age}年です。`;
  } else {
    message += `20歳を超えています。`;
  }

  console.log(message);
}
const numbers = [29342, 45342, 23419283, 148458552];
let i = 0;

while (i < numbers.length) {
  const num = numbers[i];
  const parity = (num % 2 === 0) ? "偶数" : "奇数";
  const remainder = num % 7;

  console.log(`${num} は ${parity} です。7で割ったあまりは ${remainder} です。`);

  i++; // インデックスを増やす
}