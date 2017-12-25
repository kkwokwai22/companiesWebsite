const d = document;

// list item for content
let fullList = ['About', 'Artstor Digital Library', 'Shared Self', 'News', 'Initiatives', 'Teaching Resources', 'Tips'];
let id = ['decorativeArt', 'Anthropology', 'sharedSelfCommons', 'photojouralism', 'resources'];
let words = ['Collection', 'Collection', 'Discovery', 'Collection', 'Service'];
let info = ['Decorative Arts', 'Anthropology', 'Shared Self Commons', 'Photojouralism', 'Resources for Librarians'];

let divGenerate = () => {
	return d.createElement('div');
};

let liGenerate = () => {
	return d.createElement('li');
};

let generateContentPart = list => {
	let ul = d.getElementById('content_ul');
	for (let i = 0; i < list.length; i++) {
		// create a li
		let li = liGenerate();
		li.textContent = list[i];
		ul.append(li);
	}
};

// main part border part

// making each block of the item
let generateFirstPart = (idArr, wordArr, infoArr) => {
	let firstPart = d.querySelector('.first-part');
	for (let i = 0; i < idArr.length; i++) {
		let div = divGenerate();
		let wordDiv = divGenerate();
		let infoDiv = divGenerate();
		div.setAttribute('id', idArr[i]);
		div.className = 'first-part-item';
		wordDiv.textContent = wordArr[i];
		infoDiv.textContent = infoArr[i];
		div.appendChild(wordDiv);
		div.appendChild(infoDiv);
		console.log(div);
		firstPart.appendChild(div);
	}
};

generateContentPart(fullList);
generateFirstPart(id, words, info);
