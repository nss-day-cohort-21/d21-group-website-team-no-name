let cards = document.querySelectorAll('.cards');

for (let i = 0; i < cards.length; i++) {
	cards[i].innerHTML = `<img src="${gems[i].images}" alt="${gems[i].name}">
		<h4>${gems[i].name}</h4>
		<p>${gems[i].description}</p>
		<p>Price: $${gems[i].price}</p>`;
}
