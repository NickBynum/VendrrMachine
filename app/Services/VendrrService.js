import Snacks from "../Models/Snacks.js";
import Moneys from "../Models/Moneys.js";
import _store from "../store.js"

class VendrrService {
  create(newSnackData) {
    let newSnack = new Snacks(newSnackData)
  }
}

const SERVICE = new VendrrService();

export default SERVICE;