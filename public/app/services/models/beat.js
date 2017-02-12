'use strict';

var Beat = function() {
  var active = false;

  function isActive() {
    return active;
  }

  function activate() {
    active = true;
  }

  function deactivate() {
    active = false;
  }

  function toggle() {
    var table = document.getElementsByTagName("button");
    var isMouseDown = false;

    for (var i = 0; i < table.length; i++) {
      table[i].addEventListener('mousedown', function(){
        isMouseDown = true;
          this.classList.toggle('btn-on');
          return false;

      })
    }

    for (var i = 0; i < table.length; i++) {
      table[i].addEventListener('mouseover', function(){
        if (isMouseDown) {
          this.classList.toggle('btn-on');
          }
      })
    }

    for (var i = 0; i < table.length; i++) {
      table[i].addEventListener('mouseup', function(){
      isMouseDown = false;
      });
    }
    active = (active ? false : true);
  }

  // Return public functions
  return {
    isActive: isActive,
    activate: activate,
    deactivate: deactivate,
    toggle: toggle
  }
};
