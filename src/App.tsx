import { useState } from "react";
import Alert from "./Components/alert";
import Button from "./Components/button";
import ListGroup from "./Components/ListGroup";

const items = ["Miami", "Las Vegas", "Los antos", "bonucci", "New york"];
const listfunc = (items: string) => {
  console.log(items);
};

function App() {
  const [alertV, setalertV] = useState(false);
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={listfunc} />
      {alertV && (
        <Alert onclose={()=>setalertV(false)}>
          <h5>My alert</h5>
        </Alert>
      )}
      <Button onclick={() => setalertV(true)}>My Button</Button>
    </div>
  );
}
export default App;
