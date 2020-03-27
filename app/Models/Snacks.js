export default class Snacks {
  constructor(data) {
    this.title = data.title
    this.id = data.id
    console.log("test in snacks.js");
  }

  get Template() {
  return this.title
  }
}
