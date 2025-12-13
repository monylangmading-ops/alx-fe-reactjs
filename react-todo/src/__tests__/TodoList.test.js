import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';


describe('TodoList Component Tests', () => {


test('renders initial todos', () => {
render(<TodoList />);
expect(screen.getByText('Learn React')).toBeInTheDocument();
expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});


test('adds a new todo', () => {
render(<TodoList />);


const input = screen.getByTestId('todo-input');
const addButton = screen.getByTestId('add-btn');


fireEvent.change(input, { target: { value: 'New Task' } });
fireEvent.click(addButton);


expect(screen.getByText('New Task')).toBeInTheDocument();
});


test('toggles a todo item', () => {
render(<TodoList />);


const todoItem = screen.getByText('Learn React');
fireEvent.click(todoItem);


expect(todoItem).toHaveStyle('text-decoration: line-through');
});


test('deletes a todo item', () => {
render(<TodoList />);


const deleteButtons = screen.getAllByTestId('delete-btn');
fireEvent.click(deleteButtons[0]);


expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
});