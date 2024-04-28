import { useLoaderData } from "react-router-dom";
import Card from "./components/Card";



function App() {
  const data = useLoaderData();
  return (
    <>
      <h1>Project Setup Finished</h1>
      <p>{data.length}</p>
      <div className=" grid grid-cols-3 gap-8">
        {
         data.map( element => <Card key={element._id} coffee={element} />)
        }
      </div>
    </>
  );
}

export default App;
