import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"


const Changeprofile = () => {
  const [newUsername, setNewUsername] = useState("")
  const {setUsername} = useContext(AppContext)
  return (
    <div>
      <input 
      onChange={(e) => {setNewUsername(e.target.value)}}
      type="text" />

      <button onClick={() => {setUsername(newUsername)}}>Change User name</button>
    </div>
  )
}

export default Changeprofile;