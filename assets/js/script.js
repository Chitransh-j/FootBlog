'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () {
	nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

	themeBtn[i].addEventListener('click', function () {

		// toggle `light-theme` & `dark-theme` class from `body`
		// when clicked `theme-btn`
		document.body.classList.toggle('light-theme');
		document.body.classList.toggle('dark-theme');

		for (let i = 0; i < themeBtn.length; i++) {

			// When the `theme-btn` is clicked,
			// it toggles classes between `light` & `dark` for all `theme-btn`.
			themeBtn[i].classList.toggle('light');
			themeBtn[i].classList.toggle('dark');

		}

	})

}

function validateform() {
	var name = document.myform.name.value;

	if (name == null || name == "") {
		alert("Name can't be blank");
		return false;
	}

	var x = document.myform.email.value;
	var atposition = x.indexOf("@");
	var dotposition = x.lastIndexOf(".");
	if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
		alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
		return false;

	}
}