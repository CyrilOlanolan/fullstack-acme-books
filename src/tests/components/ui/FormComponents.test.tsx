import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input, Label } from "../../../components/ui/FormComponents";

describe("Form components tests", () => {
  test("Input updates its value on user input", () => {
    render(<Input />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Hello World" } });
    expect(input.value).toBe("Hello World");
  });

  test("Input has a placeholder", () => {
    render(<Input placeholder="Hello World" />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    expect(input.placeholder).toBe("Hello World");
  });

  test("Label renders", () => {
    render(<Label>Hello World</Label>);
    const label: HTMLLabelElement = screen.getByText("Hello World");

    expect(label.textContent).toBe("Hello World");
  });
});
