import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders GitHub link", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /jordnkr/i })).toBeInTheDocument();
  });
});
