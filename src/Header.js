import HandleWindowResize from "./HandleWindowResize"

const Header = () => {
  const { width } = HandleWindowResize()

  return (
    <div>
        {width < 600 ? <p>Mobile View</p> : width < 800 ? <p>Tablet View</p> : <p>Laptop View Bro!</p>}
    </div>
  )
}

export default Header
