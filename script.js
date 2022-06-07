console.log("hello");

const firstNameInput = document.getElementById("first-name");
const submitButton = document.getElementById("submit");

console.log(firstNameInput.value);

submitButton.addEventListener("click", () => {
  console.log(firstNameInput.value);
});
