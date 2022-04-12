document.querySelectorAll('.accordian-question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('click!')

        let accCollapse = item.nextElementSibling;


        if (!item.classList.contains('collapsing')) {
            if (!item.classList.contains('open')) {
                
                accCollapse.style.display = 'block'
                let accHeight = accCollapse.clientHeight;

                setTimeout(() => {
                    accCollapse.style.height = accHeight + 'px';
                    accCollapse.style.display = '';
                }, 1);
                

                accCollapse.classList = 'accordian-collapse collapsing';
                
                setTimeout(() => {
                    accCollapse.classList = 'accordian-collapse collapse open';
                    // accCollapse.style.height = '';
                }, 300);
            }
            else {
                accCollapse.classList = 'accordian-collapse collapsing';

                setTimeout(() => {
                    accCollapse.style.height = '0px';
                }, 1);

                setTimeout(() => {
                    accCollapse.classList = 'accordian-collapse collapse';
                    accCollapse.style.height= ''
                }, 300);
                
            }
        }
        item.classList.toggle('open');
    });
});