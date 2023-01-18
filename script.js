let last = null; //buffering

function checkbox(name) {
  console.log(name);
  if (document.querySelectorAll("input:checked").length === 3) {
    last.checked = false;
  }
  //erst überschreiben, nachdem gecheckt wurde:
  last = document.querySelector(`#${name}`);
}

//eventListener auf umschließendes Element der Checkboxes:
document.body.addEventListener("change", (event) => checkbox(event.target.id));
