import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

test('get firstname and email and show them', async () => {
 const firstname = 'hamid reza';
 const email = 'hamidwise1@gmail.com';
 render(<App />);
 const firstnameInput = screen.getByRole('textbox', {
  name: /firstname/i,
 });
 const emailInput = screen.getByRole('textbox', {
  name: /email/i,
 });
 const button = screen.getByRole('button');

 user.click(firstnameInput);
 user.keyboard(firstname);
 user.click(emailInput);
 user.keyboard(email);

 await user.click(button);
 const firstnameCell = screen.getByRole('cell', {
  name: firstname,
 });
 const emailCell = screen.getByRole('cell', {
  name: email,
 });
 expect(firstnameCell).toBeInTheDocument();
 expect(emailCell).toBeInTheDocument();
});
