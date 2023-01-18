const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");

function checkbox(a, b, c) {
  if (fast.checked && cheap.checked && good.checked) {
    good.removeAttribute("checked");
  }
}

fast.addEventListener("change", function () {
  checkbox;
});
cheap.addEventListener("change", function () {
  checkbox;
});
good.addEventListener("change", function () {
  checkbox;
});

console.log(fast.checked);

//Funktion, abfragt, ob alle gechecked sind
//eventListener, die die funktion aufruft
//getrandomnit
