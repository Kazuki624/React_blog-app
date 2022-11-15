import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
        <Link to='/'><FontAwesomeIcon icon={faHouseUser} />ホーム</Link>
        <Link to='/createpost'><FontAwesomeIcon icon={faPenNib} />記事投稿</Link>
        <Link to='/login'><FontAwesomeIcon icon={faRightToBracket} />ログイン</Link>
    </nav>
  )
}

export default Navbar