window.onload = function () {
	let imageAnimate = document.getElementById("imageAnimate");
	imageAnimate.style.backgroundPositionY = "-30px";
	setTimeout(() => {
		imageAnimate.classList.remove("animated_img");
		imageAnimate.classList.add("animated_soar");
	}, 5000);
};
