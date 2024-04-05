document.addEventListener("DOMContentLoaded", function() {
    var draggableElements = document.querySelectorAll(".draggable");
    var activeElement = null;
    var offsetX, offsetY;
  
    draggableElements.forEach(function(element) {
      element.addEventListener("mousedown", function(event) {
        activeElement = element;
        offsetX = event.clientX - activeElement.getBoundingClientRect().left;
        offsetY = event.clientY - activeElement.getBoundingClientRect().top;
  
        // Add smooth transition on mousedown
        activeElement.style.transition = "transform 0.3s";
      });
    });
  
    document.addEventListener("mousemove", function(event) {
      if (activeElement) {
        var x = event.clientX - offsetX;
        var y = event.clientY - offsetY;
  
        // Apply transform to move the element smoothly
        activeElement.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  
    document.addEventListener("mouseup", function() {
      if (activeElement) {
        // Remove smooth transition on mouseup
        activeElement.style.transition = "none";
        activeElement = null;
      }
    });
  });
  
