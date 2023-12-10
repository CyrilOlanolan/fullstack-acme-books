import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Book from "../../../components/Books/Book";
import "@testing-library/jest-dom";
import { BookPreviewType } from "@/dto/books.dto";

describe("Book Component", () => {
  const bookProps = {
    id: 1,
    title: "Test Book",
    author: "Test Author",
    rating: 4.5,
    isAvailable: true,
  } satisfies BookPreviewType;

  test("renders book information correctly", () => {
    render(<Book {...bookProps} />);

    expect(screen.getByText(bookProps.title)).toBeInTheDocument();
    expect(screen.getByText(bookProps.author)).toBeInTheDocument();
    expect(screen.getByText(`${bookProps.rating} / 5`)).toBeInTheDocument();
  });

  test("renders correct number of stars based on rating", () => {
    render(<Book {...bookProps} />);

    // Assuming Stars component has a way to identify filled stars (e.g., data-testid or class)
    const filledStars = screen.getAllByTestId("filled-star");
    expect(filledStars.length).toBe(Math.floor(Math.ceil(bookProps.rating)));
    // Add additional checks for half or empty stars if your Stars component supports it
  });

  test("links to the correct book detail page", () => {
    render(<Book {...bookProps} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/books/${bookProps.id}`);
  });
});
