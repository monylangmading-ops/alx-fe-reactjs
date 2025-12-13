import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';


describe('TodoList Component', () => {


it('renders initial todos correctly', () => {
render(<TodoList />);
expect(screen.getByText('Learn React')).toBeInTheDocument();
expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});


it('adds a new todo item', () => {
render(<TodoList />);


const input = screen.getByTestId('todo-input');
const addButton = screen.getByTestId('add-btn');


fireEvent.change(input, { target: { value: 'Test Todo' } });
fireEvent.click(addButton);


expect(screen.getByText('Test Todo')).toBeInTheDocument();
});


it('toggles a todo item completion', () => {
render(<TodoList />);
const todoItem = screen.getByText('Learn React');
fireEvent.click(todoItem);


expect(todoItem).toHaveStyle('text-decoration: line-through');
});


it('deletes a todo item', () => {
render(<TodoList />);
const deleteButtons = screen.getAllByTestId('delete-btn');
fireEvent.click(deleteButtons[0]);


expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
});