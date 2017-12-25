// let id = ['decorativeArt', 'Anthropology', 'sharedSelfCommons', 'photojouralism', 'resources'];

// add event listener on button to make the hover effect
let changeTextAndImage = (text, textTwo, image) => {
	let slideText = d.querySelector('.slide-text');
	let slideTextTwo = d.querySelector('.slide-text-two');
	let imageBackground = d.querySelector('#imageElement');
	imageBackground.style.backgroundImage = `url(${image})`;
	slideText.textContent = text;
	slideTextTwo.textContent = textTwo;
};

let addEventToButton = (button, title, title2, imageUrl) => {
	button.addEventListener('mouseover', function() {
		changeTextAndImage(title, title2, imageUrl);
	});
};

let decorativeArtButton = d.querySelector('#decorativeArt');
let anthropologyButton = d.querySelector('#Anthropology');
let sharedSelfCommonsButton = d.querySelector('#sharedSelfCommons');
let photojouralismButton = d.querySelector('#photojouralism');
let resourcesButton = d.querySelector('#resources');

addEventToButton(
	decorativeArtButton,
	'form and function',
	'4,700 new images in Decorative Arts and American',
	'./images/slide/slide1.jpg'
);

addEventToButton(
	anthropologyButton,
	'more than just art',
	'170,000 new images in Anthropology',
	'./images/slide/slide2.jpg'
);

addEventToButton(
	sharedSelfCommonsButton,
	'Persusive cartography',
	'An interview with map collector PJ Mode',
	'./images/slide/slide3.jpg'
);

addEventToButton(
	photojouralismButton,
	'Pano pictures',
	'New images covering contemporary issues and events',
	'./images/slide/slide4.jpg'
);

addEventToButton(
	resourcesButton,
	'Expand your search',
	'Promote the digital library at your school',
	'./images/slide/slide5.jpg'
);
