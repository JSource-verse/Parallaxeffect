document.addEventListener('DOMContentLoaded', function() {
   const links = document.querySelectorAll('.navbar a');

   for (const link of links) {
       link.addEventListener('click', function(e) {
           e.preventDefault();

           const targetID = this.getAttribute('href').substring(1);
           const targetSection = document.getElementById(targetID);
           const offsetTop = targetSection.offsetTop;

           window.scrollTo({
               top: offsetTop,
               behavior: 'smooth'
           });
       });
   }
});



