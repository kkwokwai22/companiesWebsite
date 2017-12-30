const d = document;

// list item for content
let id = ['decorativeArt', 'Anthropology', 'sharedSelfCommons', 'photojouralism', 'resources'];
let words = ['Collection', 'Collection', 'Discovery', 'Collection', 'Service'];
let info = ['Decorative Arts', 'Anthropology', 'Shared Self Commons', 'Photojouralism', 'Resources for Librarians'];

let divGenerate = () => {
	return d.createElement('div');
};

let liGenerate = () => {
	return d.createElement('li');
};

// main part border part

// making each block of the item
let generateFirstPart = (idArr, wordArr, infoArr) => {
	let firstPart = d.querySelector('.first-part');
	for (let i = 0; i < idArr.length; i++) {
		// genterate all the divs
		let div = divGenerate();
		let wordDiv = divGenerate();
		let infoDiv = divGenerate();
		let wrapDiv = divGenerate();
		// setAttribute class and id
		div.setAttribute('id', idArr[i]);
		div.className = 'first-part-item';
		wordDiv.className = 'custom-gray-wording';
		infoDiv.className = 'custom';
		wordDiv.textContent = wordArr[i];
		infoDiv.textContent = infoArr[i];
		// appendChild to div(first-part-item)
		div.appendChild(wordDiv);
		div.appendChild(infoDiv);
		console.log(div);
		firstPart.appendChild(div);
	}
};

generateFirstPart(id, words, info);
