import elementMaker from "./moveDolyeodolyeodolimpan.js";

export default function punchElement() {
  let elementSet = [];
  for (let i = 0; i < 1; i++) {
    let maker = elementMaker("div", "random");
    elementSet.push(maker);
  }
  return elementSet.join("");
}
