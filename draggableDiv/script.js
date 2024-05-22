const drag = document.getElementById("drag")

drag.addEventListener("mousedown", (e) => {
	// this will caluculate the distance from the left end of the div and the mouse cursor position 
	const offsetX = e.clientX - drag.getBoundingClientRect().left;
	const offsetY = e.clientY - drag.getBoundingClientRect().top;

	const onMouseMove = (e) => {
		const left = e.clientX - offsetX;
		const top = e.clientY - offsetY;

		drag.style.left = `${left}px` // I am using backtick here " ` "
		drag.style.top = `${top}px` // I am using backtick here " ` "
	}

	const onMouseUp = () => {
		document.removeEventListener("mousemove", onMouseMove)
		document.removeEventListener("mouseup", onMouseUp)
	}
	document.addEventListener("mousemove", onMouseMove)
	document.addEventListener("mouseup", onMouseUp)
})
