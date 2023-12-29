import { useRef } from "react"

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
   const userRef = useRef()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Add item:</label>
      <input 
        type="text" 
        ref={userRef}
        id='item'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
    />
    <button onClick={()=>userRef.current.focus()} type='submit'>Submit</button>
    </form>
  )
}

export default AddItem
