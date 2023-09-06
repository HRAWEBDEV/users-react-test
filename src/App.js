import { useState } from 'react';
import UserForm from './component/UserForm';
import UserList from './component/UserList';

const containerStyles = {
 padding: '1rem',
};

const App = () => {
 const [users, setUsers] = useState([]);
 const handleAddUser = (newUser) => {
  setUsers((prev) => [...users, newUser]);
 };

 return (
  <div style={containerStyles}>
   <UserForm onAddUser={handleAddUser} />
   <hr />
   <UserList users={users} />
  </div>
 );
};

export default App;
