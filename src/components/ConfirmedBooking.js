
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const { state } = useLocation();

  return (
    <section className="confirmed-section container" aria-live="polite">
      <div className="confirmed-card">
        <h1>Booking Confirmed!</h1>
        <p>
          Thank you{state?.name ? `, ${state.name}` : ""}! Your table at Little
          Lemon Chicago has been reserved.
        </p>
        {state && (
          <ul className="booking-summary">
            <li><strong>Date:</strong> {state.date}</li>
            <li><strong>Time:</strong> {state.time}</li>
            <li><strong>Guests:</strong> {state.guests}</li>
            <li><strong>Occasion:</strong> {state.occasion}</li>
          </ul>
        )}
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
