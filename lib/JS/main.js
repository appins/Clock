/*
  A simple clock, writen in .coffee and compiled to .JS
  Shows seconds sence 1-1-1970, timezone, day and other things.

  This file and most files in the clock project are licenced under the
  Eclipse Public Licence v1.0, please see the folder LICENCE for more details.
 */
var a, h;

h = 0;

a = function() {
  var x, y;
  x = document.getElementById('displayTime');
  x.innerHTML = Date();
  y = document.getElementById('displaySeconds');
  y.innerHTML = Math.floor(new Date() / 1000);
  if (Math.floor(new Date / 1000) > 2000000000) {
    x.innerHTML = 'THIS PROGRAM IS SO OLD <br> HAS HUMANITY SURVIVED?';
    y.innerHTML = '-ERROR-';
  } else {
    aFunc(h);
    h++;
    setTimeout(window.onload, 1000);
  }
};
