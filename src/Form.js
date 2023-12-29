import './Form.css';
import './Table.css';
const Form = ({items, reqType, setReqType, handleSubmit}) => {

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button
                    onClick={()=>setReqType('users')}
                >Users</button>
                <button
                    onClick={()=>setReqType('posts')}
                >Posts</button>
                <button
                    onClick={()=>setReqType('comments')}
                >Comments</button>
            </form>
            <p>
                {/* <ul>
                    {items.map(item=>(
                        <li className='item' key={item.id}>{JSON.stringify(item)}</li>
                    ))}
                </ul> */}
                <table>
                    <tbody>
                        {items.map(item=>(
                            <tr>
                                {Object.entries(item).map(([key, value])=>(
                                    <td>
                                        {JSON.stringify(value)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </p>
        </>
    )
}
export default Form;