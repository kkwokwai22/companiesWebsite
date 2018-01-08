const d = document;

let divGenerator = () => {
	return d.createElement('div');
};

let liGenerator = elem => {
	let newElem = d.createElement('li');
	newElem.textContent = elem;
	return newElem;
};

let imgGenerator = img => {
	let newImage = d.createElement('img');
	newImage.src = img;
	return newImage;
};

let pGenerator = text => {
	let newParagraph = d.createElement('p');
	newParagraph.textContent = text;
	return newParagraph;
};

let h2Generator = text => {
	let newh2 = d.createElement('h2');
	newh2.textContent = text;
	return newh2;
};
