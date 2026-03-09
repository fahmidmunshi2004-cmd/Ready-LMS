const accBtns = document.querySelectorAll('.acc-btn');
accBtns.forEach((btn) => {
    const accSubmenu = btn.nextElementSibling;
    btn.classList.add('active');
    accSubmenu.style.maxHeight = accSubmenu.scrollHeight + "px";
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        if (accSubmenu.style.maxHeight) {
            accSubmenu.style.maxHeight = null;
        } else {
            accSubmenu.style.maxHeight = accSubmenu.scrollHeight + "px";
        }
    });
});