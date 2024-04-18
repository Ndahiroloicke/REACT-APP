import ListGroup from "./Components/ListGroup";
const items = ['New York','San fransisco', 'tokyo','London','Paris']
const handle = (item:string)=>{
  console.log(item)
}
function App() {
  return (
    <div>
      <ListGroup items = {items} heading = 'Cities' onSelectItem={handle}/>
    </div>
  );
}
export default App;
 