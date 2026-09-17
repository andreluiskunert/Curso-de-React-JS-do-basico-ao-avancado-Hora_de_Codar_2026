import { useState } from "react"

const ListRender = () => { 
    const [list] = useState(["André Luis", "Jean Cardoso","Lucas Camargo"]);
  return (
   
    <div>
      <ul>
        {list.map((item)=>
            <li>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default ListRender
