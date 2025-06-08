import { useState } from 'react';

export default function User(props) {
  const [folowlersCount, setFollowersCount] = useState(0);

  function increment(e) {
    setFollowersCount(folowlersCount + 1);
  }

  return (
    <div className='user-card'>
      <img src={props.avatar} alt={props.username + 's avatar'} />
      <h3>{props.username}</h3>
      <p>{props.email}</p>
      <button onClick={increment}>Followers {folowlersCount}</button>
    </div>
  );
}
