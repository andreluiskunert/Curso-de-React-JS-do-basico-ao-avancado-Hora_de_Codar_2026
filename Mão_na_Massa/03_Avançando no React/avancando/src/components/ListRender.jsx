import { useState } from "react"

const ListRender = () => { 
    const [list] = useState(["André Luis", "Jean Cardoso","Lucas Camargo"]);
    const [users, setUsers] = useState([
        {id:1, name: "Lucas Camargo", age:31},
        {id:2, name: "Jean Cardoso", age:30},
        {id:3, name: "André Luis", age:44}
    ])
  return (
   <div>
        {/* 4 Render sem key */}
        <ul>
            {users.map((user) =>(
                <li>{user.name} - {user.age} Anos </li>
            ))}
        </ul>
    
      {/* 5 render com key */}
      <ul>
        {users.map((user) =>{
          <li key={user.id}>
            {user.name}-{user.age} Anos
          </li>
        })}
      </ul>
      </div>
  );
}

export default ListRender
