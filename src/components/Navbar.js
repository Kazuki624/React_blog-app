import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({isAuth}) => {
  return (
    <nav>
        <Link to='/'><FontAwesomeIcon icon={faHouseUser} />ホーム</Link>
        {/* 状態変数isAuthが、true or false　を確認し、それぞれの処理を三項演算子で記入 */}
        {!isAuth ? (
            <Link to='/login'><FontAwesomeIcon icon={faRightToBracket} />ログイン</Link> 
            ) : (
              <>
              <Link to='/logout'><FontAwesomeIcon icon={faRightToBracket} />ログアウト</Link>
              <Link to='/createpost'><FontAwesomeIcon icon={faPenNib} />記事投稿</Link>
              </>
        )}
    </nav>
  )
}

export default Navbar