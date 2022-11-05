import { render, screen } from "@testing-library/react";
import MessageInput from "./MessageInput";

describe("Message Input component", () => {
  test("renders textarea input", () => {
    render(<MessageInput />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  
  test("renders 'Send' button", () => {
    render(<MessageInput />);

    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });
});
