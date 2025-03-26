/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];

// hieronder komt jullie code - veel succes
const fullNameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const registreerBtn = document.querySelector("#registreer")
const registreerForm = document.querySelector("#registreerForm")



registreerBtn.addEventListener("click", () => {
  if (fullNameInput.value == '' || emailInput.value == '' || passwordInput.value == '') {
  const foutMelding
}
  else{
  users.push({fullname: fullNameInput.value, email: emailInput.value, password: passwordInput.value})
  console.log(users);
}})


const lijstGebruikers = document.querySelector("#lijstGebruikers")
const spanUsername = document.querySelector("#username")
const spanEmail = document.querySelector("#email")
spanUsername.innerHTML= ""
spanEmail.innerHTML= ""


