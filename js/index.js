function onScrollHandler() {
    let arrowEl = document.querySelector('.arrow-up')
    let phoneIconEl = document.querySelector('.connect')

    // arrowEl.addEventListener('click', function() {
        
    // })

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        arrowEl.style.display = 'block';
        phoneIconEl.style.display = 'block';
    } else {
        arrowEl.style.display = 'none';
        phoneIconEl.style.display = 'none';
    }
}
