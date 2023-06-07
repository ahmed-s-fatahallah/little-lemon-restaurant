import { render, screen } from "@testing-library/react";
import BookingForm from "./../components/Booking/BookingForm";

import userEvent from "@testing-library/user-event";

const AVAILABLE_TIMES = ["16:00", "17:00", "18:00", "19:00", "20:00"];

describe("bookingForm tests", () => {
  test("Renders the BookingForm", () => {
    render(<BookingForm availableTimes={AVAILABLE_TIMES} />);
    const bookintBtnElement = screen.getByText(/^make your reservation$/i);
    expect(bookintBtnElement).toBeInTheDocument();
  });

  test("updateTimes function", () => {
    render(<BookingForm availableTimes={AVAILABLE_TIMES} />);
    const times = screen.getAllByRole("combobox");
    expect(times[0]).toHaveLength(6);
  });

  test("initializes available times", () => {
    render(<BookingForm availableTimes={AVAILABLE_TIMES} />);
    const times = screen.getAllByRole("combobox");
    expect(times[0]).toHaveLength(6);
  });
});
