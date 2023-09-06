import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

const users = [{ firstname: 'hamid reza', email: 'hamidwise1@gmail.com' }];
test('render one row per user', () => {
 // * render the component
 const { container } = render(<UserList users={users} />);
 // * query rows
 // const rows = within(screen.getByTestId('users')).getAllByRole('row');
 // eslint-disable-next-line
 const rows = container.querySelectorAll('tbody tr');
 expect(rows).toHaveLength(1);
});

test('render the email and name of each use', () => {
 render(<UserList users={users} />);

 users.forEach((user) => {
  const firstname = screen.getByRole('cell', { name: user.firstname });
  const email = screen.getByRole('cell', { name: user.email });

  expect(firstname).toBeInTheDocument();
  expect(email).toBeInTheDocument();
 });
});
