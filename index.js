const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const preloader = document.querySelector('#preloader')

const currentYear = new Date().getFullYear()
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)
year.innerText = currentYear + 1

function updateCountdown() {
  const currentTime = new Date()
  const diff = nextYear - currentTime
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60
  const secondsLeft = Math.floor(diff / 1000) % 60

  days.innerText = daysLeft
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
}
updateCountdown()

setInterval(updateCountdown, 1000)

setTimeout(function() {
 preloader.remove()
 countdown.style.display = 'flex' 
}, 1000)




