import { useState } from 'react';

const UserForm = ({ onAddUser }) => {
 const [firstname, setFirstname] = useState('');
 const [email, setEmail] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!firstname || !email) {
   alert('please fill inputs');
   return;
  }
  onAddUser({ firstname, email });
  setEmail('');
  setFirstname('');
 };

 return (
  <form>
   <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
    <label style={{ flexBasis: '4rem' }} htmlFor='firstname'>
     firstname:
    </label>
    <input
     type='text'
     id='firstname'
     value={firstname}
     onChange={(e) => setFirstname(e.target.value)}
    />
   </div>
   <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
    <label style={{ flexBasis: '4rem' }} htmlFor='email'>
     email:
    </label>
    <input
     type='text'
     id='email'
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    />
   </div>
   <div>
    <button
     style={{
      backgroundColor: 'green',
      color: 'white',
      minWidth: '5rem',
      minHeight: '1.8rem',
      borderRadius: '0.25rem',
      border: '1px solid gray',
      textTransform: 'capitalize',
     }}
     type='submit'
     onClick={handleSubmit}
    >
     add user
    </button>
   </div>
  </form>
 );
};

export default UserForm;
