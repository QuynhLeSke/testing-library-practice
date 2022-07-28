import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpace } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button has correct color when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("initail checkbox", () => {
  render(<App />);
  const colorButton = screen.getAllByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");
  expect(colorButton).toBeEnabled;
  expect(checkbox).not.toBeChecked;
});

test("disable and enable button by clicking checkbox", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled;

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled;
});

test("turn button gray on click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).not.toHaveStyle({ backgroundColor: "gray" });
});

describe("camel and space case", () => {
  test("test camel with one word only", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });
  test("test camel with 2 word", () => {
    expect(replaceCamelWithSpace("VioletRed")).toBe("Violet Red");
  });
  test("test camel with one word only", () => {
    expect(replaceCamelWithSpace("BlueRedWhite")).toBe("Blue Red White");
  });
});
