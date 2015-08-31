# THIS FILE WILL BE COMPILED FROM .COFFEE TO .JS
# These lines will be removed opon compiling.

###
  A simple clock, writen in .coffee and compiled to .JS
  Shows seconds sence 1-1-1970, timezone, day and other things.

  This file and most files in the clock project are licenced under the
  Eclipse Public Licence v1.0, please see the folder LICENCE for more details.
###

# Helpful comments are only shown in CoffeeScript.
h = 0
a = ->
  # displayTime is on the bottem, displaySeconds is on the top.
  x = document.getElementById 'displayTime'
  x.innerHTML = Date();
  # I know i could just skip creating x and y vars, but It helps development.
  y = document.getElementById 'displaySeconds'
  y.innerHTML = Math.floor new Date()/1000
  if Math.floor(new Date / 1000) > 2000000000
    # On the date 2033 May this program will deactivate.
    x.innerHTML = 'THIS PROGRAM IS SO OLD <br> HAS HUMANITY SURVIVED?'
    y.innerHTML = '-ERROR-'
  else
    aFunc h
    h++
    setTimeout window.onload, 1000
  return
