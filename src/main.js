window.onload = function () {
	const buttonTop = document.getElementById("up");
	const buttonDown = document.getElementById("down");
	const moveTable = document.getElementById("table");
	let offset = 0;
	let down = false;

	function movePx(offset) {
		// console.log("offset: ", offset);
		moveTable.style.paddingTop = offset + "px";
	}

	buttonTop.addEventListener("mousedown", () => {
		let move = setInterval(() => {
			offset = offset - 1;

			if (offset == 0 || down == false) {
				clearInterval(move);
			}
			movePx(offset);
		}, 20);
		down = true;
	});

	buttonDown.addEventListener("mousedown", () => {
		let move = setInterval(() => {
			if (offset >= 100 || down == false) {
				clearInterval(move);
			}
			offset = offset + 1;
			console.log("offset: ", offset);
			movePx(offset);
		}, 20);
		down = true;
	});

	buttonDown.addEventListener("mouseup", () => {
		down = false;
	});
	buttonTop.addEventListener("mouseup", () => {
		down = false;
	});
};
