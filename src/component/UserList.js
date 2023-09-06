const UserList = ({ users }) => {
 return (
  <table style={{ width: '100%', border: '1px solid gray' }}>
   <thead>
    <tr>
     <td
      style={{
       paddingInline: '0.5rem',
       height: '2rem',
       borderBottom: '1px solid gray',
       borderRight: '1px solid gray',
      }}
     >
      firstname
     </td>
     <td
      style={{
       paddingInline: '0.5rem',
       height: '2rem',
       borderBottom: '1px solid gray',
      }}
     >
      email
     </td>
    </tr>
   </thead>
   <tbody>
    {users.map(({ firstname, email }) => {
     return (
      <tr key={firstname}>
       <td
        style={{
         padding: '0.5rem',
         borderRight: '1px solid gray',
        }}
       >
        {firstname}
       </td>
       <td
        style={{
         padding: '0.5rem',
        }}
       >
        {email}
       </td>
      </tr>
     );
    })}
   </tbody>
  </table>
 );
};

export default UserList;
