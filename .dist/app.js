//const loginForm = document.querySelector("#login-form"); // #을 붙여서 id를 찾는것을 명시
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function btnClick() {
    alert(loginInput.value);
    console.log("clicked");
}

loginButton.addEventListener("click" , btnClick );


const map = new Map();

map.set('key','value');
map.set('key2','value2');

console.log(map);
console.log(map.size);


