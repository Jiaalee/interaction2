// Function to add animation class when triggered
function animateOnClick() {
    const fadeElements = document.querySelectorAll('.fade-trigger');
    fadeElements.forEach(element => {
      element.classList.add('fade-in');
    });
  }
  
  // Add event listener to trigger animation on click
  document.getElementById('trigger').addEventListener('click', animateOnClick);
  

  document.addEventListener('DOMContentLoaded', function() {
    const triggers = document.querySelectorAll('.trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const hiddenContent = this.parentElement.querySelector('.hidden');
            hiddenContent.classList.toggle('show');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleTexts = document.querySelectorAll('.toggleText');

    toggleTexts.forEach(toggleText => {
        toggleText.addEventListener('click', function() {
            this.classList.toggle('checked');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const triggerWord = document.getElementById('triggerWord');
    const fadeDiv = document.getElementById('fadeDiv');

    triggerWord.addEventListener('click', function() {
        fadeDiv.classList.add('fade-out'); // Add class to fade out div

        // Remove the div from the DOM after fading out
        setTimeout(() => {
            fadeDiv.style.display = 'none';
        }, 500); // Adjust the delay as needed (500 milliseconds in this case)

        // Reinsert the div into the DOM after a certain time
        setTimeout(() => {
            fadeDiv.classList.remove('fade-out'); // Remove the fade-out class
            fadeDiv.style.display = 'block';
        }, 10000); // Adjust the delay as needed (2000 milliseconds in this case)
    });
});

