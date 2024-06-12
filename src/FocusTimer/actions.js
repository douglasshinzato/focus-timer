//Aqui estão todos os elementos HTML que correspondem às ações da aplicação sendo colocados em suas respectivas variáveis para utilização no script.

import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}
export function setCountdown() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}

export function toggleMusic() {
  state.isMuted = document.documentElement.classList.toggle("music-on")
}
