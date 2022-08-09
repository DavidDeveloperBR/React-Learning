import { useState } from "react"

function ListRender() {
    const [list] = useState(["Matheus", "João", "Maria", "Pedro", "José"]);

    const [users, setUsers] = useState([
        {id: 1,
        name: "Matheus",
        age: 20},
        {id: 2, 
        name: "João", 
        age: 30},
        {id: 3, 
        name: "José", 
        age: 23}
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 3);

        setUsers((prevUsers) =>{
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);

        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender