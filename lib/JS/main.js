/*
  A simple clock, writen in .coffee and compiled to .JS

  This files and all fiels in the clock project are licenced under the
  Eclipse Public Licence v1.0, please see the folder LICENCE for more details.
 */

 // v1.0


 window.onload = function() {
   var x, y;
   x = document.getElementById('displayTime');
   x.innerHTML = Date();
   y = document.getElementById('displaySeconds');
   y.innerHTML = Math.floor(new Date() / 1000);
   if (Math.round(new Date / 1000) > 2000000000) {
     x.innerHTML = 'THIS PROGRAM IS OLD <br> HAS HUMANITY SURVIVED?';
     y.innerHTML = '-ERROR-'
   } else {
     setTimeout(window.onload, 1000);
   }
 };
