
import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <section className="booking-page container">
      <div className="booking-intro">
        <h1>Book a Table</h1>
        <p>Experience authentic Mediterranean flavors in the heart of Chicago.</p>
      </div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
};

export default BookingPage;
