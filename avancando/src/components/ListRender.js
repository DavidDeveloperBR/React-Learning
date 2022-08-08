import { useState } from "react"

function ListRender() {
    const [list] = useState(["Matheus", "João", "Maria", "Pedro", "José"]);

    const [users] = useState([
        {id: 1,
        name: "Matheus",
        age: 20},
        {id: 2, 
        name: "João", 
        age: 30}
    ]);

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
    </div>
  )
}

export default ListRender