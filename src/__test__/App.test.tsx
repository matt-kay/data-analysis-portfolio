import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  render(<App />);

  test("should render Text ", () => {
    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("portfolio");
  });
});
