class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food >= 1) {
      this.food -= 1;
    } else {
      this.isHealthy = false;
    }
  }
}
class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
    if (this.getAvailableSeatCount() !== 0) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    let traveler = new Traveler();
    if (traveler.isHealthy === false) {
      return false;
    } else {
      return true;
    }
  }
  totalFood() {
    return this.passengers[0].food;
  }
}
