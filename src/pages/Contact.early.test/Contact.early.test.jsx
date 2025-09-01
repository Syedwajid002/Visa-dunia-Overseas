import React from "react";
import emailjs from "@emailjs/browser";
import Contact from "../Contact";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mocking lucide-react components
jest.mock("lucide-react", () => ({
  Phone: () => <div>Phone Icon</div>,
  Mail: () => <div>Mail Icon</div>,
  MapPin: () => <div>MapPin Icon</div>,
  Clock: () => <div>Clock Icon</div>,
  Send: () => <div>Send Icon</div>,
  CheckCircle: () => <div>CheckCircle Icon</div>,
}));

// Mocking emailjs
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(),
}));

describe("Contact() Contact method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy Path Tests
  describe("Happy Paths", () => {
    test("should render the contact form with all fields and submit button", () => {
      render(<Contact />);
      expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Preferred Destination Country/i)
      ).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /Send Message/i })
      ).toBeInTheDocument();
    });

    test("should submit the form successfully and show success message", async () => {
      emailjs.sendForm.mockResolvedValueOnce({ text: "Success" });

      render(<Contact />);
      fireEvent.change(screen.getByLabelText(/Full Name/i), {
        target: { value: "John Doe" },
      });
      fireEvent.change(screen.getByLabelText(/Email Address/i), {
        target: { value: "john@example.com" },
      });
      fireEvent.change(screen.getByLabelText(/Phone Number/i), {
        target: { value: "+1234567890" },
      });
      fireEvent.change(
        screen.getByLabelText(/Preferred Destination Country/i),
        { target: { value: "USA" } }
      );
      fireEvent.change(screen.getByLabelText(/Message/i), {
        target: { value: "I am interested in studying abroad." },
      });

      fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

      await waitFor(() => {
        expect(emailjs.sendForm).toHaveBeenCalled();
        expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
      });
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    test("should show error message when emailjs fails to send the form", async () => {
      emailjs.sendForm.mockRejectedValueOnce({ text: "Failed" });

      render(<Contact />);
      fireEvent.change(screen.getByLabelText(/Full Name/i), {
        target: { value: "John Doe" },
      });
      fireEvent.change(screen.getByLabelText(/Email Address/i), {
        target: { value: "john@example.com" },
      });
      fireEvent.change(screen.getByLabelText(/Phone Number/i), {
        target: { value: "+1234567890" },
      });
      fireEvent.change(
        screen.getByLabelText(/Preferred Destination Country/i),
        { target: { value: "USA" } }
      );
      fireEvent.change(screen.getByLabelText(/Message/i), {
        target: { value: "I am interested in studying abroad." },
      });

      fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

      await waitFor(() => {
        expect(emailjs.sendForm).toHaveBeenCalled();
        expect(
          screen.getByText(/Something went wrong. Please try again later./i)
        ).toBeInTheDocument();
      });
    });

    test("should not submit the form if required fields are empty", () => {
      render(<Contact />);
      fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
      expect(emailjs.sendForm).not.toHaveBeenCalled();
    });
  });
});
