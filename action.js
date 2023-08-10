/*
Given a number, show all it's dividers
*/

function Divisors() {
  let diverOf = document.getElementById("number").value;
  let divisorsResult = document.getElementById("result");

  //Warning to type a valid number
  if (diverOf == "" || diverOf == 0 || diverOf < 0) {
    alert("Please type a valid number > 1!!!");
  }

  //Calculating divisors
  for (i = 1; i <= diverOf; i++) {
    if (diverOf % i === 0 && i == diverOf)
      divisorsResult.innerHTML += `<strong> ${i}.  </strong> `;
    else if (diverOf % i === 0)
      divisorsResult.innerHTML += `<strong> ${i},  </strong>`;
  }
  //Reset form
  document.getElementById("formReset").reset();
}

//Function to reset the game, or to refresh the web
const reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  location.reload();
});

//To force the scrollTop after refreshing with location.reload()
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
