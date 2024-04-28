import { useLoaderData } from "react-router-dom";
import Card from "./components/Card";
import { useState } from "react";



function App() {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data)
  return (
    <>
      <h1>Project Setup Finished</h1>
      <p>{data.length}</p>
      <div className=" grid grid-cols-3 gap-8">
        {
         coffees.map( element => <Card key={element._id} coffee={element} coffees={coffees} setCoffees={setCoffees} />)
        }
      </div>
    </>
  );
}

export default App;
