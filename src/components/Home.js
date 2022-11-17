import React, { useEffect, useState } from 'react'
import {collection,deleteDoc,doc,getDocs} from "firebase/firestore"
import {auth, db} from "../firebase"
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
            // setPostList((data.docs.map((doc) => ({...doc.data(), id:doc.id}))))
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPosts()
    },)

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "posts", id)); //ドキュメントのドック関数で、dbの中のそれクションのidを取得する
        window.location.href = "/"
    }
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
                        {post.author.id === auth.currentUser.uid && (
                            <button onClick={() => handleDelete(post.id)}>削除</button>
                        )}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Home;