const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
let last = null; //buffering

function checkbox(name) {
  console.log(name);
  if (fast.checked && cheap.checked && good.checked) {
    last.checked = false;
  }
  //erst überschreiben, nachdem gecheckt wurde:
  last = document.querySelector(`#${name}`);
}

//eventListener auf umschließendes Element der Checkboxes:
document.body.addEventListener("change", (event) => checkbox(event.target.id));
