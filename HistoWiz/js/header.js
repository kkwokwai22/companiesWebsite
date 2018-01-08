let headerContent = d.querySelector('.header-content-ul');
let list = ['Demo', 'How it works', 'Pricing', 'Services', 'Pathologymap™', 'Log In', 'Sign Up'];

for (let li of list) {
	headerContent.appendChild(liGenerator(li));
}


