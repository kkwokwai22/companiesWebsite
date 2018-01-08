let sectionThreeInfo = [
	{
		image: './images/info/accelerate.jpg',
		p: 'We are the fastest histology service company building an intelligent tissue platform.',
		button: 'The HistoWiz Advantage'
	},
	{
		image: './images/info/free-trial.jpg',
		p: 'Take advantage of the HistoWiz free trial offer on your first set of samples.',
		button: 'Free Trail'
	},
	{
		image: './images/info/amazon.png',
		p: 'Refer a colleague and when they place an order youll get a $50 Amazon gift card.',
		button: 'Referral Program'
	},
	{
		image: './images/info/president-dinner.png',
		p: 'Once a month our customers are invited to dinner with our CEO to give feedback.',
		button: 'Dinner at HistoWiz'
	}
];

let sectionThree = d.querySelector('.section-three-content');
function SectionThreeContent(image, p, button) {
	let threeContent = divGenerator();
	let buttonDiv = divGenerator();
	buttonDiv.textContent = button;
	buttonDiv.className = 'buttonColor';
	threeContent.className = 'threeContent';
	threeContent.appendChild(imgGenerator(image));
	threeContent.appendChild(pGenerator(p));
	threeContent.appendChild(buttonDiv);
	return threeContent;
}

for (let info of sectionThreeInfo) {
	sectionThree.appendChild(SectionThreeContent(info.image, info.p, info.button));
}
