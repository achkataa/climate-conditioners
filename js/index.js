function onScrollHandler() {
    let arrowEl = document.querySelector('.arrow-up')

    arrowEl.addEventListener('click', function() {
        
    })

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        arrowEl.style.display = 'block';
    } else {
        arrowEl.style.display = 'none';
    }
}
