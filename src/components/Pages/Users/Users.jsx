import styles from "./Users.module.scss";
import Button from "../../UI/Button";
import React from "react";

let Users = (props) => {
    let toFollow = (id) => {
        props.follow(id);
    }
    let toUnfollow = (id) => {
        props.unfollow(id);
    }
    let usersList = props.users.map( user =>

        <div className={styles.user}>
            <div className={styles.avatar}>
                <img src={user.avatar} alt=""/>
            </div>
            <div className={styles.content}>
                <div>
                    <span className={styles.name}>{user.userName}</span>
                    <p>{user.textStatus}</p>
                </div>
                <div className={styles.location}>
                    <div className={styles.city}>{user.location.cityName}</div>
                    <div className={styles.country}>{user.location.countryName}</div>
                </div>
            </div>
            <div className={styles.actions}>
                <Button
                    type='btn'
                    text={user.followStatus ? 'Unfollow' : 'Follow'}
                    onClick={user.followStatus
                        ? () =>toUnfollow(user.id)
                        : () =>toFollow(user.id)}
                />
            </div>
        </div>
    );
    return (
        <div className={styles.usersList}>
            {usersList}
            <div className={styles.btnArea}>
                <Button type='btn' text='Load More'/>
            </div>
        </div>
    );
}

export default Users;
