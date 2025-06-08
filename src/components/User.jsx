export default function User(props) {
  return (
    <div>
      <img src={props.avatar} alt={props.username + 's avatar'} />
      <h3>{props.username}</h3>
      <p>{props.email}</p>
      <button>Followers 4</button>
    </div>
  );
}
