function ScrollBar(containerId){
	
	let container = document.getElementById(containerId) || null,
		content = container.querySelector(".content") || null,
		scrollBar = container.querySelector("input[type=range]") || null;
	
	if (!container || !content || !scrollBar) { return console.log('missing one or more dom element (ex. container[div], .content[div], .scrollBar[input=type[range]])'); }
	
	let	cntnrH = container.offsetHeight,
		scrllH = content.scrollHeight,
		diffH = scrllH - cntnrH+20,
		scrllBrH = scrollBar.offsetHeight;

	if (scrllH < cntnrH) {
		return scrollBar.outerHTML = "";
	}
	scrollBar.style.width = cntnrH-10;
	scrollBar.style.right = (scrllBrH-cntnrH/2)+'px';
	scrollBar.addEventListener('change', () => {
		content.scrollTop = diffH/100*scrollBar.value;
	});
	
	content.addEventListener('scroll', () => {
		scrollBar.value = 100/(scrllH-cntnrH+20)*content.scrollTop;
	});
};