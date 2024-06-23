const drawerButton = document.querySelector('.drawer');
const navBar = document.querySelector('.nav-bar');

drawerButton.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

export { drawerButton, navBar };
