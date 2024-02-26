import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Create from "../Create.jsx";
import '@testing-library/jest-dom';

jest.mock("uuidv4", () => ({
    uuid: () => "1234",
}));



test("AddTodo contains input field and is focused on load", () => {
    const { getByTestId } = render(<Create />);
    const inputField = getByTestId("new-item");

    expect(inputField).toHaveFocus();
});

test("should not call add method if input field is empty", () => {
    const add = jest.fn();
    const { getByTestId } = render(<Create add={add} />);
    const btn = getByTestId("submit-btn");
    fireEvent.click(btn);

    expect(add).not.toHaveBeenCalledTimes(1);
});

test(" should go through successfully", () => {
    const handleAdd = jest.fn();
    const { getByTestId } = render(<Create />);
    const input = getByTestId("new-item");
    const btn = getByTestId("submit-btn");

    fireEvent.change(input, { target: { value: "grocery" } });
    fireEvent.click(btn);
    handleAdd({
        _id: "1234",
        task: "grocery"
    });

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith({
        _id: "1234",
        task: "grocery"
    });
});