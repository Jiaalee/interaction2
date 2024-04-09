// Make the image containers draggable:
var imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach(function(container) {
  makeDraggable(container);
});

function makeDraggable(container) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  container.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // Set a higher z-index to bring the element to the top layer
    container.style.zIndex = getHighestZIndex() + 1;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    container.style.top = (container.offsetTop - pos2) + "px";
    container.style.left = (container.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  // Function to get the highest z-index among all image containers
  function getHighestZIndex() {
    var highestIndex = 0;
    imageContainers.forEach(function(container) {
      var zIndex = parseInt(window.getComputedStyle(container).getPropertyValue('z-index'));
      if (zIndex > highestIndex) {
        highestIndex = zIndex;
      }
    });
    return highestIndex;
  }
}


