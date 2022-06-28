const images = document.querySelectorAll(".image-wrapper");

const removeClasses = (images) => {
	images.forEach((image) => {
		image.classList.remove(
			"move-left",
			"move-right",
			"move-default",
			"smaller"
		);
	});
};

images[2].addEventListener("click", (e) => {
	removeClasses(images);
	images.forEach((image, i) => {
		image.classList.add("move-left");
		if (i !== 2) {
			image.classList.add("smaller");
		}
	});
});

images[1].addEventListener("click", (e) => {
	removeClasses(images);
	images.forEach((image, i) => {
		image.classList.add("move-default");
		if (i !== 1) {
			image.classList.add("smaller");
		}
	});
});

images[0].addEventListener("click", (e) => {
	removeClasses(images);
	images.forEach((image, i) => {
		image.classList.add("move-right");
		if (i !== 0) {
			image.classList.add("smaller");
		}
	});
});
