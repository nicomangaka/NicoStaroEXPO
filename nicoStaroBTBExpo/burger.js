document.addEventListener('DOMContentLoaded', function () {
    var menuCheckbox = document.querySelector('.checkbox');
    var menuItems = document.querySelector('.menu-items');
    var menuLinks = document.querySelectorAll('.menu-items a');
  
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Fermer le menu
        menuCheckbox.checked = false;
        
        // Réinitialiser l'input
        var checkboxInput = document.querySelector('.checkbox');
        checkboxInput.checked = false;
      });
    });
  });
  