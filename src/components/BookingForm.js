import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: today,
    time: availableTimes[0] || "",
    guests: 2,
    occasion: "Birthday",
    name: "",
    email: "",
  });

  const [touched, setTouched] = useState({});
  const [submitError, setSubmitError] = useState("");

  // Client-side validation rules- some edge case situation
  const validate = (values) => {
    const errors = {};
    if (!values.date) {
      errors.date = "Please choose a reservation date.";
    } else if (values.date < today) {
      errors.date = "Reservation date cannot be in the past.";
    }

    if (!values.time) {
      errors.time =
        availableTimes.length === 0
          ? "No tables are available on this date. Please select another day."
          : "Please select a reservation time.";
    }
   //OFC u can't reserve if not at least a one person
    if (!values.guests || values.guests < 1) {
      errors.guests = "At least 1 guest is required.";
    } else if (values.guests > 10) {
        //incase the restaurant got too lucky LOL 
      errors.guests = "For parties larger than 10, please call our Chicago branch directly.";
    }
    //not sure to keep this one, as it mentioned in the course there is some complicated names, or combined names !!
    if (!values.name.trim() || values.name.trim().length < 2) {
      errors.name = "Please enter your full name (minimum 2 characters).";
    }
        //maybe adding a reconfirmation email, to help avoid email typing errors
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please enter a valid email address for confirmation.";
    }

    return errors;
  };

  const errors = validate(formData);
  const isFormValid = Object.keys(errors).length === 0;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData((prev) => ({ ...prev, date: selectedDate, time: "" }));
    if (selectedDate) {
      dispatch({ type: "UPDATE_TIMES", date: new Date(selectedDate) });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true,
      name: true,
      email: true,
    });

    if (!isFormValid) {
      setSubmitError("Please fix the highlighted fields before submitting.");
      return;
    }

    setSubmitError("");
    submitForm(formData);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-labelledby="booking-heading"
      noValidate
    >
      <h2 id="booking-heading">Reserve a Table</h2>

      {submitError && (
        <div role="alert" className="error-banner">
          {submitError}
        </div>
      )}

      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="res-name">Full Name *</label>
        <input
          type="text"
          id="res-name"
          name="name"
          required
          minLength={2}
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.name && errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {touched.name && errors.name && (
          <span id="name-error" role="alert" className="field-error">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="res-email">Email Address *</label>
        <input
          type="email"
          id="res-email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {touched.email && errors.email && (
          <span id="email-error" role="alert" className="field-error">
            {errors.email}
          </span>
        )}
      </div>

      {/* Date */}
      <div className="form-group">
        <label htmlFor="res-date">Choose Date *</label>
        <input
          type="date"
          id="res-date"
          name="date"
          required
          min={today}
          value={formData.date}
          onChange={handleDateChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.date && errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {touched.date && errors.date && (
          <span id="date-error" role="alert" className="field-error">
            {errors.date}
          </span>
        )}
      </div>

      {/* Time */}
      <div className="form-group">
        <label htmlFor="res-time">Choose Time *</label>
        <select
          id="res-time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={availableTimes.length === 0}
          aria-invalid={Boolean(touched.time && errors.time)}
          aria-describedby={errors.time ? "time-error" : undefined}
        >
          <option value="">-- Select a time --</option>
          {availableTimes.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span id="time-error" role="alert" className="field-error">
            {errors.time}
          </span>
        )}
      </div>

      {/* Guests */}
      <div className="form-group">
        <label htmlFor="guests">Number of Guests (1–10) *</label>
        <input
          type="number"
          id="guests"
          name="guests"
          required
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.guests && errors.guests)}
          aria-describedby={errors.guests ? "guests-error" : undefined}
        />
        {touched.guests && errors.guests && (
          <span id="guests-error" role="alert" className="field-error">
            {errors.guests}
          </span>
        )}
      </div>

      {/* Occasion */}
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business Meal</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn-primary submit-btn"
        aria-label="Submit table reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
