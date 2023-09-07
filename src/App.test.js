import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

test('get firstname and email and show them', async () => {
 // * render component
 render(<App />);
 const firstname = 'hamid reza';
 const email = 'hamidwise1@gmail.com';
 // * get elements
 const firstnameInput = screen.getByRole('textbox', {
  name: /firstname/i,
 });
 const emailInput = screen.getByRole('textbox', {
  name: /email/i,
 });
 const submit = screen.getByRole('button');
 // * simulate user events
 await user.click(firstnameInput);
 await user.keyboard(firstname);
 await user.click(emailInput);
 await user.keyboard(email);
 await user.click(submit);
 // * get result elements
 const firstnameCell = screen.getByRole('cell', {
  name: firstname,
 });
 const emailCell = screen.getByRole('cell', {
  name: email,
 });
 // * assertions
 expect(firstnameCell).toBeInTheDocument();
 expect(emailCell).toBeInTheDocument();
});
