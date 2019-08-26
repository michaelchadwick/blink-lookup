/* global $ */

$(function() {
  const blinkUrl = 'https://act.ucsd.edu/directory/search?t=directory&entry='

  $('#query').focus()

  $('form').on('submit', (evt) => {
    evt.preventDefault()
    let query = $('#query').val()

    window.location = blinkUrl + query.split(' ').join('+')
  })
})
