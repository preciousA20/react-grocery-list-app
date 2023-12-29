import ItemList from "./ItemList"
const Content = ({ items, handleChecked, handleDelete }) => {
    

  return (
    <ul>
      {items.map(item => (
        <ItemList 
            key={item.id}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
            item={item}
         />
      ))}
    </ul>
  )
}

export default Content
