import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./../components/Booking/BookingForm";

describe("BookingForm", () => {
  const mockProps = {
    availableTimes: ["12:00", "13:00", "14:00"],
    setAvailableTimes: jest.fn(),
    submitForm: jest.fn(),
    navigate: jest.fn(),
  };

  test("renders form with input and select fields", () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
  });

  test("form submission is disabled if fields are not valid", () => {
    render(<BookingForm {...mockProps} />);
    const submitButton = screen.getByText("Make your Reservation");
    expect(submitButton).toBeDisabled();
  });

  test("form submission is enabled if fields are valid", () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    fireEvent.change(dateInput, { target: { value: "2023-06-13" } });
    fireEvent.change(timeSelect, { target: { value: "12:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
    const submitButton = screen.getByText("Make your Reservation");
    expect(submitButton).not.toBeDisabled();
  });

  test("form submission calls submitForm prop with correct data", () => {
    const mockSubmitForm = jest.fn();
    render(<BookingForm {...mockProps} submitForm={mockSubmitForm} />);
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    fireEvent.change(dateInput, { target: { value: "2023-06-13" } });
    fireEvent.change(timeSelect, { target: { value: "12:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
    const submitButton = screen.getByText("Make your Reservation");
    fireEvent.click(submitButton);
    expect(mockSubmitForm).toHaveBeenCalledWith({
      id: expect.any(String),
      dateInput: "2023-06-13",
      timeSelect: "12:00",
      guestsInput: "2",
      occasionSelect: "Birthday",
    });
  });
});
