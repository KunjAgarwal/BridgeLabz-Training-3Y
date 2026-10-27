"use strict";

// Q5: Movie Ticket Booking (Objects + RegExp)
// Run in a browser to use the booking form.
const bookingForm = document.createElement("form");
bookingForm.innerHTML = `
  <h2>Movie Ticket Booking</h2>
  <label>Name <input name="name" required></label><br>
  <label>Email <input name="email" type="text" required></label><br>
  <label>Seats (1-10) <input name="seats" type="number" min="1" max="10" required></label><br>
  <button type="submit">Book Tickets</button>
  <p id="booking-message" aria-live="polite"></p>
  <pre id="ticket-details"></pre>
`;
document.body.appendChild(bookingForm);

bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(bookingForm).entries());
  const nameValid = /^[A-Za-z ]+$/.test(formData.name.trim());
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const seats = Number(formData.seats);
  const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

  const message = bookingForm.querySelector("#booking-message");
  const details = bookingForm.querySelector("#ticket-details");

  if (!nameValid || !emailValid || !seatsValid) {
    message.style.color = "red";
    message.textContent = "Invalid input: check name, email, and seats (1-10).";
    details.textContent = "";
    console.log(message.textContent);
    return;
  }

  const booking = { name: formData.name.trim(), email: formData.email, seats };
  message.style.color = "green";
  message.textContent = "Booking successful!";
  details.textContent = `Name: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
  console.log("Ticket booking:", booking);
});
