import React from 'react';
import logo from "../assets/logo.png";

const Profile = () => {
    return (
        <div className="content bar">
            <div className="content-wallpaper">

            </div>
            <div className="content-info">
                <div className="avatar">
                    <img src="avtar.png" alt=""/>
                </div>
                <div className="description">
                    <h4>John Doe</h4>
                    <p><b>Birthday date:</b> 20.10.1990</p>
                    <p><b>City:</b> Lazytown</p>
                    <p><b>Education:</b> Highest in universe</p>
                    <p><b>Info:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at commodi dignissimos eum fuga fugiat, nam quibusdam! Amet assumenda at ducimus ex iure molestias omnis optio tempore. Asperiores, tenetur?</p>
                </div>
            </div>
            <div className="content-form">
                <h5>My posts</h5>
                <form action="#">
                    <textarea placeholder={'Start typing...'}></textarea>
                    <button>Submit</button>
                </form>
            </div>
            <div className="content-posts">

            </div>
        </div>
    );
}
 export default Profile;
