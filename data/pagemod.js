(function () {
  function toggleFullScreen() {
    if (window.fullScreen) {
      document.body.mozCancelFullScreen();
    } else {
      document.body.mozRequestFullScreen();
      document.body.style.overflow = "auto";
    }
  }

  var menu = document.createElement('menu');
  var item = document.createElement('menuitem');

  menu.setAttribute('id', 'fsmenu');
  menu.setAttribute('type', 'context');

  item.setAttribute('label', 'Presentation Mode');
  item.addEventListener('click', toggleFullScreen);

  menu.appendChild(item);
  document.body.appendChild(menu);
  document.body.setAttribute('contextmenu', 'fsmenu');
})();
