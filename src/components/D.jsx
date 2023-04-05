import AppContext from './Context'
import { useContext } from 'react'

const D = () => {
    const Data = useContext(AppContext);
  return (
      <div>
          <h2>D Components</h2>
          <p style={{color:"red"}}>{Data}</p>
          <hr />
    </div>
  )
}

export default D