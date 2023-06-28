
const fadeElements = document.getElementsByClassName('scrollFade');

const scrollFade = () => {
	const viewportBottom = window.scrollY + window.innerHeight;

	for (let index = 0; index < fadeElements.length; index++) {
		const element = fadeElements[index];
		const rect = element.getBoundingClientRect();

		const elementFourth = rect.height/4;
		const fadeInPoint = window.innerHeight - elementFourth;
		const fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');

		} else {
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



