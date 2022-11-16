import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='homePage'>
        <div className='postContent'>
            <div className='postHeader'>
                <h1>タイトル</h1>
            </div>
            <div className='postTextContainer'>
                hello world !!
            </div>
            <div className='nameAndDeleteButton'>
                <h3>菅野一樹</h3>
                <button>削除</button>
            </div>
        </div>
    </div>
  )
}

export default Home;