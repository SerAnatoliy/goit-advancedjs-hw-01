import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe')
const player = new Player(iframe)
const stopTime = 'videoplayer-current-time'

const Play = function ({ seconds }) {
    localStorage.setItem(stopTime, seconds)
}

player.on('timeupdate', throttle(Play, 1000))

const currentTime = +localStorage.getItem(stopTime)
player.setCurrentTime(currentTime)
