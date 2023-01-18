const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
let last = null; //buffering

function checkbox(name) {
  if (fast.checked && cheap.checked && good.checked) {
    last.checked = false;
  }
  last = name; //erst überschreiben, nachdem gecheckt wurde
}

fast.addEventListener("change", () => checkbox(fast));
cheap.addEventListener("change", () => checkbox(cheap));
good.addEventListener("change", () => checkbox(good));

//Funktion, abfragt, ob alle gechecked sind
//eventListener, die die funktion aufruft
//was wurde zu letzt gechecked?
