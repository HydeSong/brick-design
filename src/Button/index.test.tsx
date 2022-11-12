import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  test("renders Button", () => {
    render(<Button>Click</Button>);
    const linkElement = screen.getByText(/Click/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders normal Button", () => {
    const { container } = render(<Button type="normal">Click</Button>);
    expect(container.querySelector(".uikit-btn-normal")).toBeInTheDocument();
  });

  test("renders primary Button", () => {
    const { container } = render(<Button type="primary">Click</Button>);
    expect(container.querySelector(".uikit-btn-primary")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    render(
      <Button type="primary" onClick={onClick}>
        Click
      </Button>
    );
    const linkElement = screen.getByText(/Click/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
  });

  test("should support blur", () => {
    const onBlur = jest.fn();
    render(
      <Button type="primary" onBlur={onBlur}>
        Click
      </Button>
    );
    const linkElement = screen.getByText(/Click/i);
    fireEvent.click(linkElement);
    fireEvent.blur(linkElement);

    expect(onBlur).toBeCalled();
  });

  test("should support focus", () => {
    const onFocus = jest.fn();
    render(
      <Button type="primary" onFocus={onFocus}>
        Click
      </Button>
    );
    const linkElement = screen.getByText(/Click/i);
    fireEvent.focus(linkElement);

    expect(onFocus).toBeCalled();
  });
});
