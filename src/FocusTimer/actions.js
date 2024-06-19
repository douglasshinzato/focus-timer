//Aqui estão todos os elementos HTML que correspondem às ações da aplicação sendo colocados em suas respectivas variáveis para utilização no script.

import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}
export function setCountdown() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}

export function toggleMusic() {
  state.isMuted = document.documentElement.classList.toggle("music-on")

  //o if sempre confere se o valor passado é true. Se não for, ele executa o resto da função.
  if (state.isMuted) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}
