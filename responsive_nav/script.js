const navGroup = document.querySelector(".nav-group");
const iClass = document.querySelector("i");
console.log(navGroup);

function navToggle() {
	navGroup.classList.toggle('active')
}

iClass.addEventListener('click', navToggle );