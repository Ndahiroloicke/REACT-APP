import { useState } from "react";

//props
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroup({ items, heading, onSelectItem}: Props) {
  const [ince, setince] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              ince === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setince(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
