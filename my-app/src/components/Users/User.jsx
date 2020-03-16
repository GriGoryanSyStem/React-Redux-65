import React from "react";
import Us_css from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {UserApiContClass} from "../../api/api";
// import followPict from "../../Pictures/follow_woman.png";
import followPict from "../../Pictures/unfollow.png";


let User = (props) => {
    // console.log(props);
    let pagesCount = Math.ceil(props.store.totalUsersCount / props.store.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={Us_css.pagesNumberDiv}>
                {pages.map((p, i) => {
                    return (
                        <div key={i} className={props.store.currentPage === p ? Us_css.selectedPage : ''} onClick={() => {
                            props.onPageChangeFunc(p)
                        }}>{`${p} `}</div>) // onClick={ () => {} }
                })}
            </div>
            <div className={Us_css.usersNumberDiv}>
                {
                    props.store.users.map((u, i) => <div key={i} className={Us_css.itemNumberDiv}>
                        <div>
                            <div className={Us_css.images}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img
                                        src={u.photos.small != null ? u.photos.small : followPict}
                                        alt="alt"/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed

                                    ? <button disabled={props.store.folElemArr.some(elemId => elemId === u.id)} onClick={() => {
                                        {props.folButDisAC(true, u.id)}
                                        UserApiContClass.followApi_2(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.folAC(u.id);
                                            }
                                            {props.folButDisAC(false, u.id)}
                                        })

                                    }}>Unfollow</button>
                                    : <button disabled={props.store.folElemArr.some(elemId=>elemId === u.id)} onClick={() => {
                                        {props.folButDisAC(true, u.id)}
                                        UserApiContClass.unfollowApi_3(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFolAC(u.id);
                                            }
                                            {props.folButDisAC(false, u.id)}
                                        });

                                    }}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.id}</div>
                                {/*<div>{"u.location.city"}</div>*/}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
};
export default User;