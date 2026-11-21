import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

describe("BookingForm & Reservation Reducer", () => {
  test("Renders the Reserve a Table heading", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );
    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
  });

  test("initializeTimes returns a non-empty array of available time slots", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test("updateTimes returns updated times when given a valid date action", () => {
    const initialState = ["17:00"];
    const newState = updateTimes(initialState, {
      type: "UPDATE_TIMES",
      date: new Date("2026-12-25"),
    });
    expect(Array.isArray(newState)).toBe(true);
  });

  test("Displays validation error messages on invalid form submission", () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={mockSubmit}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: /submit table reservation/i,
    });
    fireEvent.click(submitButton);

    expect(
      screen.getByText(/Please enter your full name/i)
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("Submits form successfully when all inputs are valid", () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: "4" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /submit table reservation/i })
    );

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Jane Doe",
        email: "jane@example.com",
        time: "18:00",
        guests: 4,
      })
    );
  });
});
