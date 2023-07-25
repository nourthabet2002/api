
import Card from './Card'
import { useEffect ,useState } from 'react'
import axios from 'axios'
const Cartlist = () => {
    const [persons, setpersons] = useState([])
    useEffect(() => {
      (async()=>{
        try {
            let result=await axios.get("https://jsonplaceholder.typicode.com/users");
            setpersons(result.data);
        } catch (error){
        console.log(error);
    }
      })();
    }, [])
    
  return (
    <div className='list'>
      {persons.map(el=><Card  key={el.id} el={el}/>)}
    </div>
  )
}

export default Cartlist
