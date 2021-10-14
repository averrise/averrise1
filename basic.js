const logInForm= document.querySelector("#login-form");
const logInInput=document.querySelector("#login-form input");
const logInButton= document.querySelector("#login-form button");
const greeting=document.querySelector("#greeting");


function onLogInBtn(event) {
    event.preventDefault();
    logInForm.classList.add("hidden");
    const username=logInInput.value;
    localStorage.setItem("username", username);
    paintToDo(username);
}

function paintToDo(username){
    greeting.innerText= `hello${username}`;
    greeting.classList.remove("hidden");
 }
const savedUsername=localStorage.getItem("username");

if (savedUsername===null) {
    logInForm.classList.remove("hidden");
    logInForm.addEventListener("submit", onLogInBtn);
}

else {
    paintToDo(savedUsername);
}