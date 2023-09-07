import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserForm from './UserForm';

test('it shows two inputs and one button', async () => {
 render(<UserForm />);
 const inputs = screen.getAllByRole('textbox');
 const button = screen.getByRole('button');

 expect(inputs).toHaveLength(2);
 expect(button).toBeInTheDocument();
});

test('submit calls onAddUser', async () => {
 // * NOT THE BEST IMPLEMENTATION
 const mock = jest.fn();
 const firstname = 'hamid reza';
 const email = 'hamidwise1@gmail';
 // * render component
 render(<UserForm onAddUser={mock} />);
 // * find inputs

 const firstnameInput = screen.getByRole('textbox', {
  name: /firstname/i,
 });
 const emailInput = screen.getByRole('textbox', {
  name: /email/i,
 });
 // * simulate clicking input
 user.click(firstnameInput);
 // * simulate typing the firstname
 user.keyboard(firstname);
 user.click(emailInput);
 user.keyboard(email);

 // * find the submit button
 const button = screen.getByRole('button');
 await user.click(button);
 // * assertions (onAddUser is called)
 expect(mock).toHaveBeenCalled();
 expect(mock).toHaveBeenCalledWith({ firstname, email });
 // * after the submit the inputs are empty
 expect(firstnameInput).toHaveValue('');
 expect(emailInput).toHaveValue('');
});
