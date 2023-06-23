document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling effect for navigation links
    var navLinks = document.querySelectorAll('nav ul li a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionId = this.getAttribute('href');
        var targetSection = document.querySelector(targetSectionId);
        var targetSectionPosition = targetSection.offsetTop;
  
        window.scrollTo({
          top: targetSectionPosition,
          behavior: 'smooth'
        });
      });
    }
  });
  