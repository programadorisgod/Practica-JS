export function Greeting({ title = "title" }) {
    console.log(title);
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
  
  export function UserCard({name, amount, married, address, points}) {
  
    return <div>
      <h1>User Card</h1>
      <p>Name: {name}</p>
      <p>amount: 💲{amount}</p>
      <p>married: {married ? 'married' : 'Not single'}</p>
      <p> points: {points}</p>
      <p>address: </p>
      <ul>
          <li> city: {address.city}</li>
          <li> street: {address.street} </li>
      </ul>
  
    </div>
  }
  