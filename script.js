let last = null; //buffering

function checkbox(name) {
  console.log(name);
  if (document.querySelectorAll("input:checked").length === 3) {
    last.checked = false;
  }
  //erst ├╝berschreiben, nachdem gecheckt wurde:
  last = document.querySelector(`#${name}`);
}

//eventListener auf umschlie├čendes Element der Checkboxes:
document.body.addEventListener("change", (event) => checkbox(event.target.id));
