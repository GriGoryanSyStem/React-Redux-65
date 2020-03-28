import React from "react";
import Us_css from "./Users.module.css";
import {NavLink} from "react-router-dom";
import followPict from "../../Pictures/unfollow.png";


let User = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={Us_css.pagesNumberDiv}>
                {pages.map((p, i) => {
                    return (
                        <div key={i} className={props.currentPage === p ? Us_css.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChangeFunc(p)
                             }}>{`${p} `}</div>) // onClick={ () => {} }
                })}
            </div>
            <div className={Us_css.usersNumberDiv}>
                {
                    props.users.map((u, i) => <div key={i} className={Us_css.itemNumberDiv}>
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
                                    ? <button disabled={props.folElemArr.some(elemId => elemId === u.id)}
                                              onClick={() => {
                                                  props.unFollowThunkCreator_S(u.id);
                                              }}> Unfollow</button>
                                    : <button disabled={props.folElemArr.some(elemId => elemId === u.id)}
                                              onClick={() => {
                                                  props.followThunkCreator_S(u.id);
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