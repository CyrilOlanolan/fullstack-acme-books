import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Stars from "@/components/ui/Stars";

describe("Stars component", () => {
  it("should render correct number of stars based on rating", () => {
    const rating = 3.5;
    const totalStars = 5;
    const { getAllByTestId } = render(
      <Stars rating={rating} totalStars={totalStars} />
    );

    const filledStars = getAllByTestId("filled-star");
    expect(filledStars.length).toBe(Math.ceil(rating));
  });

  it("should render correct total stars when custom value is provided", () => {
    const totalStars = 10;
    const rating = 7;
    const { container } = render(
      <Stars rating={rating} totalStars={totalStars} />
    );
    const svgElements = container.querySelectorAll("svg");
    expect(svgElements.length).toBe(totalStars);
  });

  it("should apply custom size", () => {
    const size = "2rem";
    const { container } = render(<Stars rating={3} size={size} />);
    const firstStar = container.querySelector("svg");
    expect(firstStar).toHaveAttribute("width", size);
    expect(firstStar).toHaveAttribute("height", size);
  });

  it("should apply custom color", () => {
    const color = "#FF0000"; // Red color
    const { container } = render(<Stars rating={3} color={color} />);
    const firstStar = container.querySelector("stop");
    expect(firstStar).toHaveAttribute("stop-color", color);
  });
});
