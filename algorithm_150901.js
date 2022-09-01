let example = "오늘은 9월 1일 입니다.";
// console.log(words[2]);
const strCopy = example.split();
// const oneDay = (words[2] = "9일 추석연휴");
const words = example.split(" ");

// for(let i = 0; i < example.length; i++){

// }
words[2] = "고양이";
console.log(words[2]);
console.log(words);

console.log(words.join(" "));
// strCopy
