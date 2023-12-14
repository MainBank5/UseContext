import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar