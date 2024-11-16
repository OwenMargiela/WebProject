export class Movie {
  constructor(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
}

export class Package {
  constructor(movie) {
    this.movie = movie; // Movie object
    this.tickets = 1; // Default to 1 ticket
    this.seats = []; // Array to hold seat numbers
  }

  setTickets(num) {
    this.tickets = num;
  }

  setSeats(seats) {
    this.seats = seats;
  }
}
