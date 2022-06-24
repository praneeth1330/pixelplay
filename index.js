const el = document.querySelector(".item1");

el.addEventListener("mousemove", (e) => {
	el.style.backgroundPositionX = -e.offsetX + "px";
	el.style.backgroundPositionY = -e.offsetY + "px";
});
