// <img src="./images/hoverItemImage/first.jpg" alt="one">
// <div class='hover-grid-content'>
// 	<div>Enhancing scholarship and teaching</div>
// 	<div class='custom-gray-wording'>Artstor provides digital collection solutions for institutions of learning worldwide</div>
// 	<div class='hover-grid'>
// 		<ul>
// 			<li>Mission & History</li>
// 			<li>Advistory Groups</li>
// 			<li>Contact us</li>
// 		</ul>
// 		<ul>
// 			<li>Trustee & Staff</li>
// 			<li>Careers</li>
// 		</ul>
// 	</div>
// </div>

let hoverImages = [];
let hoverColor = ['#E21C28', '#8300e0', '#0039c6', '#afc128', '#008d58', '#ef6e1e', '#f2be19'];
let fullList = ['About', 'Artstor Digital Library', 'Shared Self', 'News', 'Initiatives', 'Teaching Resources', 'Help'];

let eventColoring = (element, color, text) => {
	element.addEventListener('mouseenter', function() {
		element.style.color = color;
	});
	element.addEventListener('mouseleave', function() {
		element.style.color = 'black';
	});
	element.textContent = text;
};

let generateContentPart = list => {
	let ul = d.getElementById('content_ul');
	for (let i = 0; i < list.length; i++) {
		// create a li
		let li = liGenerate();
		eventColoring(li, hoverColor[i], list[i]);
		ul.append(li);
	}
};

generateContentPart(fullList);
