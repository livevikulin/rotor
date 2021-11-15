import Choices from "choices.js";

const element = document.querySelector('.js-choice')

if ( element ) {
	const choices = new Choices(element, {
		searchEnabled: false,
		highlighted: false
	})
}

