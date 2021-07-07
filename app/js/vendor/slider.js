const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	slidesPerView: 2,
	spaceBetween: 20,
	width: 860,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});