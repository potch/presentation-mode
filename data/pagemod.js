(function () {
  function toggleFullScreen() {
    if (window.fullScreen) {
      document.documentElement.mozCancelFullScreen();
    } else {
      document.documentElement.mozRequestFullScreen();
    }
  }

  var menu = document.createElement('menu');
  var item = document.createElement('menuitem');

  menu.setAttribute('id', 'fsmenu');
  menu.setAttribute('type', 'context');

  item.setAttribute('label', 'Presentation Mode');
  item.addEventListener('click', toggleFullScreen);

  menu.appendChild(item);
  document.documentElement.appendChild(menu);
  document.documentElement.setAttribute('contextmenu', 'fsmenu');
})();
