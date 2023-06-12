const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[0].classList.add("fadeinLeft");
	  
      document.querySelectorAll(".animated")[1].classList.add("fadeinTop");
      document.querySelectorAll(".animated")[2].classList.add("fadeinRight");

      document.querySelectorAll(".textsection").add("fadeLeft")
      

    } 
  })
})

observer.observe(document.querySelector(".container"))









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





