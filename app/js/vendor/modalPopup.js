const closeBtnPopup = document.querySelector('.modal__btn--close');
const openBtnPopup = document.querySelector('.slogan__btn');
const modalPopup = document.querySelector('.modal');

document.addEventListener('keyup', (e) => {
	if (modalPopup.classList.contains('modal--open')) {
		e.key == 'Escape' ? closeModal() : '';
	}
});
function closeModalPopup() {
	modalPopup.addEventListener('click', (event) => {
		let target = event.target;
		target.classList.contains('modal__container') ? closeModal() : '';
	});
}
function toggleModalPopup() {
	openBtnPopup.addEventListener('click', openModal);
	closeBtnPopup.addEventListener('click', closeModal);
}
function closeModal() {
	modalPopup.classList.remove('modal--open');
	document.body.classList.remove('overflow');
}
function openModal() {
	modalPopup.classList.add('modal--open');
	document.body.classList.add('overflow');
}
closeModalPopup();
toggleModalPopup();
