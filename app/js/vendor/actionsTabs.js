const tabs = document.querySelectorAll('.project-tabs__item');

tabs.forEach(item => {
	item.addEventListener('click', () => {
		for (let tab of tabs) {
			tab.classList.contains('project-tabs__item--active') ? tab.classList.remove('project-tabs__item--active') : '';
		}
		item.classList.add('project-tabs__item--active');

	});
});