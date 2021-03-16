let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/godzilla-icon.jpg') {
		myImage.setAttribute('src', 'images/firefox.png');
	} else {
		myImage.setAttribute('src', 'images/godzilla-icon.jpg');
	}
}