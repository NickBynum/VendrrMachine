import _vendrrService from "../Services/VendrrService.js";
import _store from "../store.js";



export default class VendrrController {
  constructor() {
  }
  create(event) {
    event.preventDefault()
    let formData = event.target
    let newSnack = {
      title:formData.snackName.value
    }
  }
}