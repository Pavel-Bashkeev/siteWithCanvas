const tabs = document.querySelectorAll('.project-tabs__item');
const itemBlogs = document.querySelectorAll('.project-blocks__item');
const projectContent = document.querySelectorAll('.project-content');
tabs.forEach(item => {
	item.addEventListener('click', () => {
		for (let tab of tabs) {
			tab.classList.contains('project-tabs__item--active') ? tab.classList.remove('project-tabs__item--active') : '';
		}
		item.classList.add('project-tabs__item--active');
		visibleProjectContent(tabs, projectContent)
	});
});
itemBlogs.forEach(item => {
	item.addEventListener('click', (e) => {
		let target = e.currentTarget;
		const contentBlog = target.querySelector('.project-blocks__text');
		target.classList.toggle('project-blocks__item--open');
		if (target.classList.contains('project-blocks__item--open')) {
			contentBlog.style.maxHeight = contentBlog.scrollHeight + 'px';
		} else {
			contentBlog.style.maxHeight = null;
		}
	});
});
function visibleProjectContent(tabs, progectContent) {
	for (let i = 0; i < tabs.length; i++) {
		if (tabs[i].classList.contains('project-tabs__item--active')) {
			if (tabs[i].getAttribute('data-filter') == progectContent[i].getAttribute('data-content')) {
				progectContent[i].style.display = 'grid';
			}
		} else {
			progectContent[i].style.display = 'none';
		}
	}
}
visibleProjectContent(tabs, projectContent);
