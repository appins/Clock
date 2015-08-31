/*
  Shows the duration of time you have spent on this webpage

  This file and most files in the clock project are licenced under the
  Eclipse Public Licence v1.0, please see the folder LICENCE for more details.
 */
var aFunc;

window.onload = function() {
  a();
};

aFunc = function(num) {
  if (num === 0) {
    document.getElementById('Ph').innerHTML = "You have been on this webpage for about";
    document.getElementById('Min').innerHTML = "00";
  } else if (num > 0) {
    document.getElementById('Hou').innerHTML = String((Math.floor(num / 3600)) % 12);
    document.getElementById('Min').innerHTML = String((Math.floor(num / 60)) % 60);
    if (document.getElementById('Min').innerHTML < 10) {
      document.getElementById('Min').innerHTML = "0" + document.getElementById('Min').innerHTML;
    }
  }
};
