const blinkUrl = 'https://act.ucsd.edu/directory/search?t=directory&entry='

document.querySelector('#query').focus()

document.querySelector('form').addEventListener('submit', (evt) => {
  evt.preventDefault()

  const query = document.querySelector('#query')

  console.log('query', query);

  window.location = blinkUrl + query.value.split(' ').join('+')
})
