import logo from '../../assets/blhub-logo.svg';

import './Header.css'

function Header() {
    return (
    <nav className="nav">
      <a href='/'>BLHub</a>
      <input placeholder='Search...'></input>
      <ul>
        <li>
            Login
        </li>

        <li>
            Create account
        </li>
      </ul>
    </nav>
    );
}

export default Header;