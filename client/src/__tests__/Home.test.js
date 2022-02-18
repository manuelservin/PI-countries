import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Home from "../components/home/Home";

// test utils file
const renderWithRouter = (ui, { route = "/home" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("renderizado exitoso", () => {
  renderWithRouter(<Home />);
  expect(
    screen.getByText("Discover every country in the world!")
  ).toBeInTheDocument();
});
