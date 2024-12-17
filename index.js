document.body.style.width = "100%"
document.body.style.textAlign = "center"

const loginTitle = document.createElement("p")
loginTitle.innerHTML = "Login";
loginTitle.style.fontSize = "60px";
loginTitle.style.fontWeight = "bold";
document.getElementById("parent-container").appendChild(loginTitle);

const emailTitle = document.createElement("p");
emailTitle.innerHTML = "email";
document.getElementById("parent-container").appendChild(emailTitle);

const emailInput=document.createElement("input");
document.getElementById("parent-container").appendChild(emailInput);

const passwordTitle = document.createElement("p");
passwordTitle.innerHTML = "password" ;
document.getElementById("parent-container").appendChild(passwordTitle);
const passwordInput = document.createElement("input");
document.getElementById("parent-container").appendChild(passwordInput);


const button = document.createElement("p");
button.innerHTML = "sumbit";
button.style.background = "green";
button.style.padding = "5px";
button.style.width= "50px";
button.style.margin= "auto";
button.style.marginTop= "10px";

document.getElementById("parent-container").appendChild(button);

button.addEventListener("click", () => {
    if (emailInput.value.includes("@gmail.com")) {
        console.log("========================");
        console.log(true);
        console.log("========================");
  } else {
// document.createElement()
const warning = document.createElement("p");
warning.innerHTML = "Please enter valid email";
warning.style.color = "red";
document.getElementById("parent-container").appendChild(warning);
}
if(passwordInput.value.length>=8){
    console.log("========================");
        console.log(true);
        console.log("========================");
} else {
    const warning = document.createElement("p");
warning.innerHTML = "Password should contain 8 character at least ";
warning.style.color = "red";
document.getElementById("parent-container").appendChild(warning);

}
});




