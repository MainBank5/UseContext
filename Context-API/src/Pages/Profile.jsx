import { useContext } from "react"
import Changeprofile from "../Components/Changeprofile"
import { AppContext } from "../App"

const Profile = () => {
  const {username} = useContext(AppContext);
  return (
    <div>
        <h1>Profile</h1>
        <p>This is profile page of {username}</p> 
        <Changeprofile/>
    </div>
  )
}

export default Profile