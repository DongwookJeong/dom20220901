export default function elementMaker(tagName) {
  let element = [];
  let elementSet = `<${tagName}>${random}</${tagName}>`;
  element.push(elementSet);
  return element.join("");
}
const category = ["차이나홍", "칼국수", "편의점", "돈까스", "함박"];

let random = [];
for (let i = 0; i < category.length; i++) {
  let randomEz = Math.floor(Math.random() * category.length);
  if (random.indexOf(randomEz) === -1) {
    random.push(randomEz);
  } else {
    i--;
  }
}
