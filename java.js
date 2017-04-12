function myfunc (color) {
  var className = color.getAttribute('class')
  if (className !== 'day') {
    color.className = 'day'
  } else {
    color.className = 'night'
  }
}

var pageVisits = document.getElementById('counter')

if (window.localStorage.pagecount) {
  window.localStorage.pagecount = Number(window.localStorage.pagecount) + 1
} else {
  window.localStorage.pagecount = 1
}
pageVisits.textContent = document.write('This page has been visited by you ' + window.localStorage.pagecount + ' times.')
