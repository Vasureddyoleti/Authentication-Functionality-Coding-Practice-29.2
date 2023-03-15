// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="list-cont">
    <Link to="/">
      <li className="listEl">Home</li>
    </Link>
    <Link to="/about">
      <li className="listEl">About</li>
    </Link>
  </ul>
)

export default Header
