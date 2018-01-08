// <div class='icon'>
// 	<img src="./images/icon/01.png" alt="3">
// 	<h2>3 DAY TURNAROUND</h2>
// 	<p>Send us your wet tissue samples for processing, cutting, staining, scanning and access your whole-slide images online in 3 days guaranteed.</p>
// </div>
let gridIcon = d.querySelector('.grid-icon');
let gridObject = [
	{
		image: './images/icon/01.png',
		text: '3 DAY TURNAROUND',
		p:
			'Send us your wet tissue samples for processing, cutting, staining, scanning and access your whole-slide images online in 3 days guaranteed.'
	},
	{
		image: './images/icon/02.png',
		text: 'RESULTS IN THE CLOUD',
		p:
			'Your results are stored safely in the cloud. Don’t ever worry about losing precious data again. Easily accessible anytime, anywhere for as long as needed.'
	},
	{
		image: './images/icon/03.png',
		text: 'DEVICE INDEPENDENT',
		p:
			'Access your digital slides from any internet-connected computer or mobile device, without the need to download any software, plugins or gigabyte sized files.'
	},
	{
		image: './images/icon/04.png',
		text: 'IMAGE ANALYSIS',
		p:
			'Whether it’s our world-renowned pathologists or industry leading automated image analysis software, we can help quantify and analyze your results to expedite your research.'
	},
	{
		image: './images/icon/05.png',
		text: 'COMPETITIVE PRICING',
		p:
			'Thanks to our process innovation and machine learning technology, we can deliver better results, faster and more economic than other CROs.'
	},
	{
		image: './images/icon/06.png',
		text: 'PATHOLOGYMAP™',
		p:
			'Access the world’s largest online whole-slide image database to view, share, tag, search, compare and analyze histology data at your fingertips.'
	}
];

function MakeIcon(image, text, p) {
	let iconDiv = divGenerator();
	iconDiv.className = 'icon';
	iconDiv.appendChild(imgGenerator(image));
	iconDiv.appendChild(h2Generator(text));
	iconDiv.appendChild(pGenerator(p));
	return iconDiv;
}

for (let info of gridObject) {
	gridIcon.appendChild(MakeIcon(info.image, info.text, info.p));
}
