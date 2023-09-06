import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';
import '@testing-library/jest-dom';

test('it shows two inputs and a button', () => {
 // * render the component
 render(<UserForm />);
 // * manipulate the component or find a component in it
 const inputs = screen.getAllByRole('textbox');
 const button = screen.getByRole('button');
 // * assertion - make sure the component is doing
 // * what we expect it to do
 expect(inputs).toHaveLength(2);
 expect(button).toBeInTheDocument();
});
