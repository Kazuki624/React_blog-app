import React, { useState } from 'react';
import "./CreatePost.css";

const CreatePost = () => {
    //変数を格納するための状態変数をuseStateで宣言
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();

    const createPost = () => {
        console.log(title);
        console.log(postText);
    }
  return (
    <div className='createPostPage'>
        <div className='postContainer'>
            <h1>記事を投稿する</h1>
            <div className='inputPost'>
                <div>タイトル</div>
                <input 
                    type="text" 
                    placeholder="タイトルを入力してください" 
                    onChange={(e) => setTitle(e.target.value)}></input> {/*onChangeトリガーで入力されるたびにhooksのsetTitleが起動。イベントのターゲットのvalue(文字列)を取得する*/}
            </div>
            <div className='inputPost'>
                <div>投稿内容</div>
                <textarea 
                    type="text" 
                    placeholder="投稿内容を入力してください" 
                    onChange={(e) => setPostText(e.target.value)}></textarea>
            </div>
            <button className='postButton' onClick={createPost}>投稿する</button>
        </div>
    </div>
  )
}

export default CreatePost