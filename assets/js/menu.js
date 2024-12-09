document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuItems = document.querySelector('.menu-items');
    const body = document.body;
    
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        menuItems.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    menuToggle.addEventListener('click', toggleMenu);
    
    // 点击菜单外部关闭菜单
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            toggleMenu();
        }
    });
});