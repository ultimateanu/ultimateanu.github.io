

function toggleNavMenu(event) {
  var navMenu = document.getElementById('nav-menu');
  if (window.getComputedStyle(navMenu, null).getPropertyValue('display') == 'none') {
    navMenu.style.display = 'flex';
  } else {
    navMenu.style.display = 'none';
  }
}

var navMenuButton = document.getElementById('menu-button');
navMenuButton.addEventListener("click", toggleNavMenu);

// TODO: display appropriate menu on window resize