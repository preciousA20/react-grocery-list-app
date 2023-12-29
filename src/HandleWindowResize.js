import {useState, useEffect} from 'react'

const HandleWindowResize = () => {

    const [windowResize, setWindowResize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(()=>{

        const handleResize=()=>{
            setWindowResize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        handleResize()

        window.addEventListener('resize', handleResize)

        return ()=>window.removeEventListener('resize', handleResize)

    }, [])

    return windowResize
  
}

export default HandleWindowResize
