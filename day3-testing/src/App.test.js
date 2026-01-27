import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the button", () => {
  render(<App />);
  const button = screen.getByText("Click !");
  expect(button).toBeInTheDocument();
});

test("checking button ", () => {
  render(<App />);
  const button = screen.getByText("Click !");
  expect(button).not.toBeDisabled();
});

test("checks alert !", () => {
  window.alert = jest.fn(); 

  render(<App />);
  const button = screen.getByText("Click !");

  fireEvent.click(button);

  expect(window.alert).toHaveBeenCalledWith("Button Clicked");
  expect(button).toBeDisabled();
});
