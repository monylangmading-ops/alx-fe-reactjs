import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./components/TodoList";

 

test("renders initial todos", () => {
render(<TodoList />);


expect(screen.getByText("Learn React")).toBeInTheDocument();
expect(screen.getByText("Write Tests")).toBeInTheDocument();
expect(screen.getByText("Ship Project 🚀")).toBeInTheDocument();
});


test("adds a new todo", () => {
render(<TodoList />);


const input = screen.getByPlaceholderText("Add todo");
const addButton = screen.getByText("Add");


fireEvent.change(input, { target: { value: "New Todo" } });
fireEvent.click(addButton);


expect(screen.getByText("New Todo")).toBeInTheDocument();
});


test("toggles todo completion", () => {
render(<TodoList />);


const todo = screen.getByText("Learn React");


fireEvent.click(todo);
expect(todo).toHaveStyle("text-decoration: line-through");


fireEvent.click(todo);
expect(todo).toHaveStyle("text-decoration: none");
});


test("deletes a todo", () => {
render(<TodoList />);


const todo = screen.getByText("Write Tests");
const deleteButton = todo.nextSibling;


fireEvent.click(deleteButton);


expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();
});