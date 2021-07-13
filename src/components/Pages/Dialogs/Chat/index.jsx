import React from "react";
import Message from "./Message";

import styles from "./Chat.module.scss";


const Chat = () =>{
    return(
<div className={styles.chat}>
    <Message text="lorem" />
    <Message text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium aspernatur commodi dignissimos distinctio dolorum ducimus ea eos fugit magni maxime nemo nesciunt optio perspiciatis praesentium repellat veritatis voluptate voluptatem?" />
</div>)}
export default Chat;
