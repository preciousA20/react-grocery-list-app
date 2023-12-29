
const ItemList = ({item, handleChecked, handleDelete}) => {
  return (
    <li key={item.id} className='show'>
            <input 
                style={{width:'20px', height: '20px', margin:'1rem'}}
                type="checkbox" 
                onChange={()=>handleChecked(item.id)}
                checked={item.checked}
            />
            <label style={{margin: '1.5rem'}} htmlFor="item">{item.item}</label>
            <button
                type='button'
                onClick={()=>handleDelete(item.id)}
                className='buttonDelete'
            >Delete</button>
        </li>
  )
}

export default ItemList
