let indexWrapper = document.querySelector('.index-wrapper')
if ( indexWrapper ) {
	indexWrapper.style.cursor = "none"

	let cursor = document.createElement("div"),
		follow = document.createElement("div")

	cursor.classList.add("cursor")
	follow.classList.add("follow")

	indexWrapper.appendChild(cursor)
	indexWrapper.appendChild(follow)

	function move(obj, e) {

		obj.style = ""
		obj.style.top = e.clientY + "px"
		obj.style.left = e.clientX + "px"

	}

	if(cursor) {
		window.addEventListener("mousemove", function(event) {
			let e = event,
				t = e.target,
				f = follow,
				c = cursor

			if(t.tagName == "A") {
				c.style.backgroundColor = "transparent"

				f.style.top = t.offsetTop + "px"
				f.style.left = t.offsetLeft + "px"
				f.style.width = t.clientWidth + "px"
				f.style.height = t.clientHeight + "px"

				f.classList.add("on-focus")
			} else {
				move(c, e)
				move(f, e)
				f.classList.remove("on-focus")
			}
		})
	}
}


