import { useContext } from "react"
import { AppContext } from "../App"

const Home =() => {
  const {username} = useContext(AppContext)
  return (
    <div>
        <h1>Home</h1>
        <p>This is Home page of:{username} </p>
    </div>
  )
}

export default Home