var $menuHamburguer = document.querySelector('.menu-hamburguer');
var $ul = document.querySelector('#header nav ul');
$menuHamburguer.addEventListener('click', function() {
  $ul.classList.toggle('active');
});