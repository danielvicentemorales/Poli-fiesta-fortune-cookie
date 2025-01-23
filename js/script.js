   // References to the container and state tracking
   const cookieContainer = document.getElementById('cookieContainer');
   let isOpen = false; // Tracks if the cookie is open

   // Event listener for the click
   cookieContainer.addEventListener('click', () => {
       if (isOpen) {
           // Close the cookie
           cookieContainer.classList.remove('open');
           isOpen = false;
       } else {
           // Open the cookie
           cookieContainer.classList.add('open');
           isOpen = true;
       }
   });
