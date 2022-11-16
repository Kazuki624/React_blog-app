import React, { useEffect, useState } from 'react'
import {collection,getDocs} from "firebase/firestore"
import {db} from "../firebase"
import "./Home.css"

const Home = () => {
    const [postList, setPostList] = useState([])
    // ページリロード時に一度だけブログを表示するので、useEffectを使用する
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            // console.log(data)
            // console.log(data.docs)
            // console.log(data.docs.map((doc) => ({doc})))
            // console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id}))) //data関数で中身のデータを取得してくる
            setPostList((data.docs.map((doc) => ({...doc.data(), id:doc.id}))))
        }
        getPosts()
    })
  return (
    <div className='homePage'>
        {postList.map((post) => {
            return (
                <div className='postContent' key={post.id}>
                    <div className='postHeader'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='postTextContainer'>
                            {post.postText}    
                    </div>
                    <div className='nameAndDeleteButton'>
                        <h3>@{post.author.username}</h3>
                        <button>削除</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Home;