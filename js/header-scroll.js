window.onscroll = () => changeHeaderBackground ();

function changeHeaderBackground() {
    const  header = document.quertySelector ('[data-header]');
    const headerOffsetTrigger = header.offsetTop;
    const pageOffset = window.pageYOffset;

    if (pageOffset > headerOffsetTrigger) {
        header.classList.add ('no-transoarency');
    } else {
        header.clasList.remove('no-transparency');
    }
}