function toggleNavMenu(event) {
    var navMenu = document.getElementById('nav-menu');
    if (window.getComputedStyle(navMenu, null).getPropertyValue('display') == 'none') {
        navMenu.style.display = 'flex';
    }
    else {
        navMenu.style.display = 'none';
    }
}
function pageResized(event) {
    var navMenu = document.getElementById('nav-menu');
    if (window.innerWidth > 600) {
        navMenu.style.display = 'flex';
    }
    else {
        navMenu.style.display = 'none';
    }
}
// Event listeners
document.getElementById('menu-icon').addEventListener("click", toggleNavMenu);
window.addEventListener('resize', pageResized);
//# sourceMappingURL=common.js.map