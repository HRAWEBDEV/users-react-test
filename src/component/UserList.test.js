import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

const renderComponent = () => {
 const users = [{ firstname: 'hamid reza', email: 'hamidwise1@gmail.com' }];
 const { container } = render(<UserList users={users} />);
 render(<UserList users={users} />);

 return { users, container };
};

test('render one row per user', () => {
 const { container } = renderComponent();
 // eslint-disable-next-line
 const rows = container.querySelectorAll('tbody tr');
 expect(rows).toHaveLength(1);
});

test('render the email and name of each use', () => {
 const { users } = renderComponent();
 users.forEach((user) => {
  const firstname = screen.getByRole('cell', { name: user.firstname });
  const email = screen.getByRole('cell', { name: user.email });

  expect(firstname).toBeInTheDocument();
  expect(email).toBeInTheDocument();
 });
});
