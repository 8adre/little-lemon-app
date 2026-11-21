import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Specials from "./Specials";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "../utils/api";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date);
    default:
      return state;
  }
};

const PlaceholderPage = ({ title, description }) => (
  <section className="container placeholder-section">
    <h1>{title}</h1>
    <p>{description}</p>
  </section>
);

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate("/confirmed", { state: formData });
    }
  };

  return (
    <main id="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Specials />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <PlaceholderPage
              title="About Little Lemon"
              description="Founded in Chicago by brothers Adrian and Mario, Little Lemon brings family Mediterranean recipes to life."
            />
          }
        />
        <Route path="/menu" element={<Specials />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route
          path="/order-online"
          element={
            <PlaceholderPage
              title="Order Online"
              description="Select your favorite dishes for fast Chicago delivery."
            />
          }
        />
        <Route
          path="/login"
          element={
            <PlaceholderPage
              title="Customer Login"
              description="Sign in to manage your Little Lemon reservations and orders."
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
