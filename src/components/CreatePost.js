import React from 'react';
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className='createPostPage'>
        <div className='postContainer'>
            <h1>記事を投稿する</h1>
            <div className='inputPost'>
                <div>タイトル</div>
                <input type="text" placeholder="タイトルを入力してください"></input>
            </div>
            <div className='inputPost'>
                <div>投稿内容</div>
                <textarea type="text" placeholder="投稿内容を入力してください"></textarea>
            </div>
            <button className='postButton'>投稿する</button>
        </div>
    </div>
  )
}

export default CreatePost