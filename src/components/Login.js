import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const loginInWithGoogle = ()  =>   {
        // googleでログイン
        signInWithPopup(auth, provider).then((result) => {     //参照：https://firebase.google.com/docs/auth/web/google-signin
            // ログインしたかどうかの状態変数の設定。ローカルストレージ
            localStorage.setItem("isAuth", true)
            setIsAuth(true)  //app.jsの値がtrueになる
            navigate('/')  //login後にホームへ戻る
        })
    }
  return (
    <div>
        <p>ログインして始める</p>
        <button onClick={loginInWithGoogle}>Googleで始める</button>
    </div>
  )
}

export default Login