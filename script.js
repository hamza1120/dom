var toInput = document.querySelector(".toInput");
var myBtn = document.querySelector(".myBtn");
var container = document.querySelector(".container");

//create element
myBtn.addEventListener("click", () => {
  var row = document.createElement("div");
  row.className = "row";

  var col = document.createElement("div");
  col.className = "col";

  var text = toInput.value;
  var text = document.createElement("h3");
  text.innerHTML = toInput.value;
  console.log(text);

  //create button

  var btnDelete = document.createElement("button");
  var btnCheck = document.createElement("button");
  btnDelete.innerHTML = "DELETE";
  btnCheck.innerHTML = "CHECK";
  console.log(btnDelete);

  //append child to the countainer
  col.appendChild(text);
  col.appendChild(btnDelete);
  col.appendChild(btnCheck);
  row.appendChild(col);
  container.appendChild(row);
  toInput.value = "";

  //check and delete buttons
  btnDelete.addEventListener("click", () => {
    row.remove();
  });
  btnCheck.addEventListener("click", () => {
    text.classList.toggle("text");
    if (btnCheck.innerHTML === "check") {
      btnCheck.innerHTML = "uncheck";
    } else btnCheck.innerHTML = "check";
  });
});
