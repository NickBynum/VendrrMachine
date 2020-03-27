export default class Snacks {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.amount = data.amount
    this.description = data.description
  }

  get Template() {
    return /*html */ `
    `
  }
}
