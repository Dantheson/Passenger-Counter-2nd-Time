let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count; 
}

function save () {
  let savedEl = count + " - "; 
  saveEl.textContent += savedEl; 
  countEl.textContent = 0;
  count = 0;
}

/*
TO BE FINISHED. 
let resetEl = document.getElementById("reset-el");
function reset () { 
  countEl.textContent = 0;
  count = 0; 
}

*/
