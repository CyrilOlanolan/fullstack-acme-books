import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "../../../components/ui/Dialog";

describe("Dialog tests", () => {
  test("Opens dialog on DialogTrigger click", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>Dialog Content</DialogContent>
      </Dialog>
    );

    fireEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
  });

  test("Closes Dialog on DialogClose click", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogClose />
          Dialog Content
        </DialogContent>
      </Dialog>
    );

    fireEvent.click(screen.getByText("Open Dialog")); // Open the dialog
    fireEvent.click(screen.getByRole("button", { name: /close/i })); // Close the dialog
  });
});
