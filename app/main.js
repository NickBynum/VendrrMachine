import VendrrController from "./Controllers/VendrrController.js";

class App {
  vendrrController = new VendrrController();
}

window["app"] = new App();