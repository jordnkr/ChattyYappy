import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title component", () => {
  test("renders correct title", () => {
    render(<Title />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Chatty Yappy" })
    ).toBeInTheDocument();
  });
});
