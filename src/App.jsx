import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addUser,delelteAll,delelteUser } from "./store/actions";

function App() {

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  
  const dispatch = useDispatch()
  const users = useSelector((state) => state)

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name.trim() || !surname.trim()) return

    const user = {
      name,
      surname,
      id: Date.now()
    }
    dispatch(addUser(user))
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Name"></input> <br />
        <input value={surname} onChange={(event) => setSurname(event.target.value)} type="text" placeholder="Surname"></input> <br />
        <button type="submit">Send</button> 
        <button type="submit">DELETE</button>
      </form><button onClick={() => dispatch(delelteAll())}>Delete All</button>
      {
        users.map((item) => (
          <code>{item.name} <button onClick={() => dispatch(delelteUser(item.id))}>delete</button> <br /></code>
        )
        )
      }
    </div>
  );
}

export default App;