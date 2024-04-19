
import Alert from "./Components/alert";
import Button from "./Components/button";
import ListGroup from "./Components/ListGroup";

const items = ['Miami','Las Vegas','Los antos','bonucci','New york']
const listfunc = (items:string)=>{
  console.log(items)
}

const handle = ()=> console.log('The button is pressed')

function App() {
  return ( 
    <div> 
      <ListGroup items={items} heading="Cities" onSelectItem={listfunc}/>
      <Alert>
        <h5>The above list displays some of the famous things in the world</h5>
        </Alert>
      <Button onclick={handle}>My Button</Button>
    </div>
  );
}
export default App;
  