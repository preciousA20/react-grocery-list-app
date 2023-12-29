import { useState, useEffect } from 'react'
import apiRequest from './apiRequest'
import AddItem from './AddItem'
import Search from './Search'
import Content from "./Content"
import Header from "./Header"
import Footer from "./Footer"


// web development roadmap!

// https://bit.ly/WebDevRoadmap-JrtoSr

// courses source code   https://github.com/gitdagray/mern_stack_course 

const App = () => {
  const API_URL = 'http://localhost:3500/items'
  const [items, setItems ] = useState([])
  const [errMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchItems = async()=>{
      try{
        const response = await fetch( API_URL)
        if(!response.ok){
          throw new Error('Did not receive the expected data')
        }
        const responseData = await response.json()
        setItems(responseData)
        setLoading(false)
      }catch(err){
        setErrorMsg(err.message)
      }finally{
        setLoading(false)
      }
    }
    setTimeout(()=>{
      fetchItems()
    },2000)
  }, [])

const [newItem, setNewItem]=useState('')
const [search, setSearch] = useState('')

// const setAndSaveItem = (newItems)=>{
//   setItems(newItems)
//   localStorage.setItem('shoppingList', JSON.stringify(newItems))
// }

const handleChecked = async (id) => {
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item )
    setItems(listItems)
    const myItem = listItems.filter(item=>item.id === id)
    const optionObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }

    const result = await apiRequest(`${API_URL}/${id}`, optionObj)
    if(result){
      setErrorMsg(result)
    }
}

  const handleDelete = async(id) => {
    const listItems = items.filter((item)=>item.id !== id)
    setItems(listItems)

    const result = await apiRequest(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    if(result) setErrorMsg(result)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newItem) {
      return 
    }
    addItem(newItem)
    setNewItem('')
    
  }

  const addItem = async (item)=>{
    const id = items.length ? items[items.length -1].id + 1 : 1
    const myItem = {id, item, checked: false}
    const listItems = [...items, myItem]
    setItems(listItems)

    const optionObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myItem)
    }

    const result = await apiRequest(API_URL, optionObject)
    if(result) setErrorMsg(result)
  }

  const result = items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))

  return (
    <>
      {loading && <p>Loading...</p>}
        <span className='App' >
          <h1>APP JS</h1>
          <Header />
          <Search search={search} setSearch={setSearch} />
          <br />
          <AddItem 
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
          />
          <main>
            {errMsg && <p style={{color: 'red'}}>{`Error: ${errMsg}`}</p>}
            <Content
              items ={result}
              setItems={setItems}
              handleChecked={handleChecked}
              handleDelete={handleDelete} 
            />
          </main>
          <Footer length ={items.length} />
        </span>
    </>
  )
}

export default App
