import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Back from "@/components/ui/Back"; // Adjust the import path as needed

describe("Back component tests", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Back />);
    const backButton = getByText("<< Go Back");
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveClass(
      "font-sans font-light text-right italic text-sm sm:text-md md:text-lg lg:text-xl"
    );
  });

  it("should call window.history.back() on click", () => {
    window.history.back = vi.fn();
    const { getByText } = render(<Back />);
    const backButton = getByText("<< Go Back");
    fireEvent.click(backButton);
    expect(window.history.back).toHaveBeenCalled();
  });
});
