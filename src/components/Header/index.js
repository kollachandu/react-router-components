import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="nav-menu">
    <li>
      <Link className="nav-link" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="nav-link" to="/about">
        About
      </Link>
    </li>
    <li>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)
export default Header
