import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UserForm from './UserForm';

test('it shows two inputs and one button', () => {
 render(<UserForm />);
 const inputs = screen.getAllByRole('textbox');
 const button = screen.getByRole('button');

 expect(inputs).toHaveLength(2);
 expect(button).toBeInTheDocument();
});

test('submit calls onAddUser', () => {
 // * NOT THE BEST IMPLEMENTATION
 const users = [];
 const firstname = 'hamid reza';
 const email = 'hamidwise1@gmail';
 const callBack = (newUser) => {
  users.push(newUser);
 };

 // * render component
 render(<UserForm onAddUser={callBack} />);
 // * find inputs
 const [firstnameInput, emailInput] = screen.getAllByRole('textbox');
 // * simulate clicking input
 user.click(firstnameInput);
 // * simulate typing the firstname
 user.keyboard(firstname);

 user.click(emailInput);
 user.keyboard(email);

 // * find the submit button
 const button = screen.getByRole('button');
 user.click(button);
 // * assertions (onAddUser is called)
 expect(users).toHaveLength(1);
 expect(users[0].firstname).toEqual(firstname);
 expect(users[0].email).toEqual(email);
});
