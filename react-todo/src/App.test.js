import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders todo list and allows adding a todo", () => {
  render(<App />);

  
  expect(screen.getByText("Learn React")).toBeInTheDocument();

 
  const input = screen.getByPlaceholderText("Add todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Autochecker Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("Autochecker Todo")).toBeInTheDocument();
});
