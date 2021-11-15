import Vivus from 'vivus'

new Vivus('logo', {
	duration:200, 
	type:"delayed",
	animTimingFunction: Vivus.EASE_OUT
}, after)

/* fillPath */
let count= 0
function fillPath(classname, color){
	count++
	let path = document.querySelector('.'+classname)
	path.setAttribute('class', `${classname} opacity-${count}`)
}

/* after */
function after(){
	fillPath('logo-path-1', '#00408F');
	fillPath('logo-path-2', '#00408F');
	fillPath('logo-path-3', '#00408F');
	fillPath('logo-path-4', '#00408F');
	fillPath('logo-path-5', '#00408F');
	fillPath('logo-path-6', '#00408F');
	fillPath('logo-path-7', '#00408F');
	fillPath('logo-path-8', '#00408F');
	fillPath('logo-path-9', '#00408F');
	fillPath('logo-path-10', '#00408F');
}
