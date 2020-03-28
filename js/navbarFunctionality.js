const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', event => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('active');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.classList.remove('active');
});