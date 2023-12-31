import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul className="nav__list">
      {items.map(item => (
        <ListItem key={item.id} text={item.text} icon={item.icon} />
      ))}
    </ul>
  );
}

export default List;
