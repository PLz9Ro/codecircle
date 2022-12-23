const span = document.querySelectorAll('span')
const bgs = [ 'white', 'black','pink','yellow']

setInterval(() => {
  span.forEach((e) => {
    let color = bgs[Math.floor(Math.random() * bgs.length)]
    e.style.border = `5px solid ${color}`
  })
}, 200)
