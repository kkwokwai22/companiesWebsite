// Generate the Content of the hoverItem
let hoverItemInGrid = d.querySelector('.hover-item-in-grid');
let hoverContentInGrid = d.querySelector('.hover-grid-content');
let hoverGridUl = d.querySelector('.hover-grid');

function img_create(src, alt, title) {
	var img = d.createElement('img');
	img.src = src;
	if (alt != null) img.alt = alt;
	if (title != null) img.title = title;
	return img;
}

function ul_create(...liWords) {
	let ul = ulGenerate();
	for (let i = 0; i < liWords.length; i++) {
		let li = liGenerate();
		li.textContent = liWords[i];
		ul.appendChild(li);
	}
	hoverGridUl.appendChild(ul);
}

let divContent = divGenerate();
let divContentTwo = divGenerate();
divContent.textContent = 'Enhancing scholarship and teaching';
divContentTwo.textContent = 'Artstor provides digital collection solutions for institutions of learning worldwide';
divContentTwo.className = 'custom-gray-wording';
// Generate The ul
ul_create('Mission & History', 'Advistory Groups', 'Contact us');
ul_create('Trustee & Staff', 'Careers');

// inserting / appending
hoverContentInGrid.insertBefore(divContent, hoverGridUl);
hoverContentInGrid.insertBefore(divContentTwo, hoverGridUl);
hoverItemInGrid.insertBefore(img_create('./images/hoverItemImage/first.jpg'), hoverContentInGrid);

// data to work with
let hoverColor = ['#E21C28', '#8300e0', '#0039c6', '#afc128', '#008d58', '#ef6e1e', '#f2be19'];
let fullList = ['About', 'Artstor Digital Library', 'Shared Self', 'News', 'Initiatives', 'Teaching Resources', 'Help'];

function eventForHoverItem(element, color, text) {
	element.addEventListener('mouseenter', function() {
		element.style.color = color;
		// here we will set the content of the hoverItem
	});
	element.addEventListener('mouseleave', function() {
		element.style.color = 'black';
	});
	element.textContent = text;
}

function generateContentPart(list) {
	let ul = d.getElementById('content_ul');
	for (let i = 0; i < list.length; i++) {
		// create a li
		let li = liGenerate();
		eventForHoverItem(li, hoverColor[i], list[i]);
		ul.append(li);
	}
}

generateContentPart(fullList);
