import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

test('render one row per user', () => {
 const users = [{ firstname: 'hamid reza', email: 'hamidwise1@gmail.com' }];
 // * render the component
 const { container } = render(<UserList users={users} />);
 // * query rows
 // const rows = within(screen.getByTestId('users')).getAllByRole('row');
 // eslint-disable-next-line
 const rows = container.querySelectorAll('tbody tr');
 expect(rows).toHaveLength(1);
});
