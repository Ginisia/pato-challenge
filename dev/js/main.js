// const swiper = new Swiper('.swiper', {
// 	loop: true,
// 	autoplay: {
// 		delay: 3000,
// 	},

// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });
var burger_menu = document.querySelector('.burger-btn');
var menu = document.querySelector('.window-menu');
var cross = document.querySelector('.cross-wind');

burger_menu.addEventListener('click', function () {
	menu.classList.toggle('active');
});

cross.addEventListener('click', function () {
	menu.classList.toggle('active');
});


