// /\d/ -> essa expressão regular verifica se a tecla pressionada é um número. Se for um número, ela retorna "true", se não ela retorna "false". Dessa forma fazemos com que a função "onkeypress", que só permite a digitação quando valor recebido é "true" permita apenas números.

import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })
  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })
}
