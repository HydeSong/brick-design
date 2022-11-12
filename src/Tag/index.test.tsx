import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tag from "./index";

describe("Tag", () => {
  test("renders Tag", () => {
    render(<Tag>Tag 1</Tag>);
    const linkElement = screen.getByText(/Tag 1/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should support onclose", () => {
    const onClose = jest.fn();
    const {container} = render(<Tag closable onClose={onClose}>Click</Tag>);
    const linkElement = container.querySelector("svg") as SVGSVGElement;
    fireEvent.click(linkElement);
    expect(onClose).toBeCalled();
  });
});
