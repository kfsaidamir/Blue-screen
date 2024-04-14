setInterval(() => {
  countDown()
} )

const countDown = () => {
  // #1
  const deadLine = new Date('2 May 2024 00:00:00')
  const now = new Date()
  const gap = deadLine - now
  // #2
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  // #3
  const textDay = Math.floor(gap / day) 
  const textHour = Math.floor((gap % day) / hour)
  const textMinuite = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)
  // #4
  document.querySelector('.day').innerText = textDay
  document.querySelector('.hour').innerText = textHour
  document.querySelector('.minute').innerText = textMinuite
  document.querySelector('.second').innerText = textSecond
}

countDown()
