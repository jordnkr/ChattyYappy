import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title component", () => {
  test("renders correct title", () => {
    render(<Title />);

    expect(screen.getByText("Chatty Yappy")).toBeInTheDocument();
  });
});
