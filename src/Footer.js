
const Footer = ({ length }) => {
    const today = new Date()

  return (
    <footer style={{position:'relative', top: '6rem'}}>
      <p>{length} List
        {length < 2 ? 'item': 'items'} . httpwithpius@{today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
