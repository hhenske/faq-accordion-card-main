document.querySelectorAll('.accordian-question').forEach((item) => {
    item.addEventListener('click', (event) => {
        let accCollapse = item.nextElementSibling;

        if (!item.classList.contains('collapsing')) {
            if (!item.classList.contains('open')) {
                accCollapse.classList = 'accordian-collapse collapsing';

                setTimeout(() => {
                    accCollapse.classList = 'accordian-collapse open';
                    accCollapse.style.height = accHeight + 'px';
                    accCollapse.style.display = '';
                }, 300);
            }
        else {
            accCollapse.classList = 'accordian-collapse collapsing';

            setTimeout(() => {
   
               accCollapse.classList = 'accordian-collapse collapse';
                }, 300);
            }
        }
        item.classList.toggle('open');
    });
});