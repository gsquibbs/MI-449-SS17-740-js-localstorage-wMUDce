// counts page visits
var pageVisits = document.getElementById('counter')

if (window.localStorage.pagecount) {
  window.localStorage.pagecount = Number(window.localStorage.pagecount) + 1
} else {
  window.localStorage.pagecount = 1
}
pageVisits.textContent = document.write('This page has been visited by you ' + window.localStorage.pagecount + ' times.')

var currentTheme = window.localStorage.getItem('currentTheme')
if (currentTheme !== null) {
  document.body.setAttribute('class', currentTheme)
}

// changes and saves theme
var toggleButton = document.getElementById('toggle')

toggleButton.addEventListener('click', function () {
  if (document.body.getAttribute('class') !== 'day') {
    currentTheme = 'day'
    document.body.setAttribute('class', currentTheme)
    window.localStorage.setItem('currentTheme', currentTheme)
  } else {
    currentTheme = 'night'
    document.body.setAttribute('class', currentTheme)
    window.localStorage.setItem('currentTheme', currentTheme)
  }
})
