import { useState } from 'react';

export default function UserForm(props) {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUsers((prevUsers) => [
      ...prevUsers,
      {
        ...data,
        id: prevUsers.length + 1,
      },
    ]);
  };

  const handleChange = (e) => {
    setData((prevData) => {
      const newData = { ...prevData };
      newData[e.target.id] = e.target.value;
      return newData;
    });
  };

  return (
    <form onSubmit={handleSubmit} className='users-form'>
      <div>
        <label htmlFor='email'>email</label>
        <input onChange={handleChange} id='email' type='text' />
      </div>
      <div>
        <label htmlFor='first_name'>first_name</label>
        <input onChange={handleChange} id='first_name' type='text' />
      </div>
      <div>
        <label htmlFor='last_name'>last_name</label>
        <input onChange={handleChange} id='last_name' type='text' />
      </div>
      <div>
        <label htmlFor='avatar'>avatar</label>
        <input onChange={handleChange} id='avatar' type='text' />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
}
