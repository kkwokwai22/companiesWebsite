// Selector of main-part-wrapper
let mainHover = d.querySelector('.hover-item-of-content');
let hoverContentInGrid = d.querySelector('.hover-grid-content');
let hoverItemInGrid = d.querySelector('.hover-item-in-grid');
let hoverGridUl = d.querySelector('.hover-grid');

function img_create(src, alt, title) {
	let img = d.createElement('img');
	img.setAttribute('id', 'hoverImage');
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

// Generate the Content of the hoverItem
let divContent = divGenerate();
let divContentTwo = divGenerate();
divContentTwo.className = 'custom-gray-wording';
// inserting / appending
hoverContentInGrid.insertBefore(divContent, hoverGridUl);
hoverContentInGrid.insertBefore(divContentTwo, hoverGridUl);
hoverItemInGrid.insertBefore(img_create('./images/hoverItemImage/first.jpg'), hoverContentInGrid);
// Generate The ul
ul_create('Mission & History', 'Advistory Groups', 'Contact us');
ul_create('Trustee & Staff', 'Careers', null);
// data to work with
let detailList = [
	{
		head: 'About',
		title: 'Enhancing scholarship and teaching',
		color: '#E21C28',
		subHeading: 'Artstor provides digital collection solutions for institutions of learning worldwide',
		image: './images/hoverItemImage/first.jpg',
		liDetail: ['Mission & History', 'Advistory Groups', 'Contact us', 'Trustee & Staff', 'Careers']
	},
	{
		head: 'Artstor Digital Library',
		title: 'Made for teaching.',
		color: '#8300e0',
		subHeading: 'Explore more than 2 million images for education and research.',
		image: './images/hoverItemImage/seven.jpg'
	},
	{
		head: 'Shared Self',
		title: 'Manage collections with ease.',
		color: '#0039c6',
		subHeading: 'Upload, catalog, and share your institutional or faculty collections.',
		image: './images/hoverItemImage/third.jpg'
	},
	{
		head: 'News',
		title: 'Constantly improving and expanding.',
		color: '#afc128',
		subHeading: 'New releases, upcoming events, and collection highlights.',
		image: './images/hoverItemImage/fourth.jpg'
	},
	{
		head: 'Initiatives',
		title: 'Committed to teamwork.',
		color: '#008d58',
		subHeading: 'Artstor’s collaborations with the community.',
		image: './images/hoverItemImage/fifth.jpg'
	},
	{
		head: 'Teaching Resources',
		title: 'Artstor for all disciplines.',
		color: '#ef6e1e',
		subHeading: 'Teaching resources and promotional materials.',
		image: './images/hoverItemImage/sixth.jpg'
	},
	{
		head: 'Help',
		title: 'User support, tips, and documentation.',
		color: '#f2be19',
		subHeading: 'We’re here to help.',
		image: './images/hoverItemImage/seven.jpg'
	}
];
function eventForHoverItem(element, color, text, text1, text2, image, ul) {
	element.addEventListener('mouseenter', function() {
		let hoverImage = d.getElementById('hoverImage');
		element.style.color = color;
		divContent.style.color = color;
		mainHover.style.display = 'block';
		hoverImage.src = image;
		// here we will set the content of the hoverItem
		divContent.textContent = text1;
		divContentTwo.textContent = text2;
	});
	element.addEventListener('mouseleave', function() {
		element.style.color = 'black';
		mainHover.style.display = 'none';
	});
	element.textContent = text;
}

function generateContentPart(list) {
	let ul = d.getElementById('content_ul');
	for (let i = 0; i < list.length; i++) {
		// create a li
		let li = liGenerate();
		eventForHoverItem(
			li,
			list[i].color,
			list[i].head,
			list[i].title,
			list[i].subHeading,
			list[i].image,
			list[i].liDetail
		);
		ul.append(li);
	}
}

generateContentPart(detailList);
