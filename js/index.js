const output = document.getElementById("output");
const clearBtn = document.getElementById("clear-btn");
const removeLastBtn = document.getElementById("remove-last");
const nums = document.querySelectorAll(".nums");
const assignments = document.querySelectorAll(".assignments");


nums.forEach(num => {
  num.addEventListener("click", event => {
    output.innerHTML += event.target.innerHTML;
  });
});

assignments.forEach(assignment => {
  assignment.addEventListener("click", event => {
    output.innerHTML += event.target.innerHTML;
  });
});

clearBtn.addEventListener("click", () => {
  output.innerHTML = "";
});

removeLastBtn.addEventListener("click", () => {
  output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);
});