import _vendrrService from "../Services/VendrrService.js";
import _store from "../store.js";

function _drawSnacks(){
  let template = ""
  let snack = _store.State.snacks

  snack.forEach((car, index) => template += snack.template)
  document.getElementById("snackName").innerHTML = template
}

export default class VendrrController {
  constructor() {    
  }
  create(event) {
    event.preventDefault()
    let formData = event.target
    let newSnack = {title: formData.snackName.value}
  }
}