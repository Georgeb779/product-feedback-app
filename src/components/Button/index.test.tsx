import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./index";
import { SuggestionsEmptyIcon } from "@/assets/icons";

describe("Button", () => {
  it("renders the component with correct props", () => {
    const mockOnClick = jest.fn();

    const { getByRole } = render(
      <Button text='Click me' onClick={mockOnClick} type='primary' />
    );

    expect(getByRole("button")).toHaveTextContent("Click me");
    expect(getByRole("button")).toHaveClass("btn");
    expect(getByRole("button")).toHaveClass("primary");
    expect(getByRole("button")).not.toHaveAttribute("aria-label");

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });

  it("calls the onClick callback when the button is clicked", () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <Button text='Click me' onClick={mockOnClick} type='primary' />
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders the component with an icon", () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <Button
        text='Click me'
        onClick={mockOnClick}
        type='primary'
        icon={<SuggestionsEmptyIcon />}
      />
    );
    const button = getByRole("button");

    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("renders the component with an aria-label", () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <Button
        text='Click me'
        onClick={mockOnClick}
        type='primary'
        arialabel='Button label'
      />
    );
    const button = getByRole("button");

    expect(button).toHaveAttribute("aria-label", "Button label");
  });
});
