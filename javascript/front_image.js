const nameFrame = document.getElementById('name');
const imageFrame = document.getElementById('featured');//select image frame
const pframe = document.getElementById('featured-description');//select p frame

let count = 0;

//every 3 seconds
function updateProduct() {
	setInterval(function() {
		nameFrame.innerHTML = gems[count].name;//change the name of the image
		imageFrame.setAttribute('src', gems[count].images);//change the image
		pframe.innerHTML = gems[count].description;//change the description
		count++;
		if (count === gems.length) {
			count = 0;
		}
	}, 3000);
}
updateProduct();


