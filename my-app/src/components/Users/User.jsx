import React from "react";
import c from "./Users.module.css";
import {NavLink} from "react-router-dom";
import followPict from "../../Pictures/follow_woman.png";
import Pagination from "./Pagination";
import Loader from "../Common/Loader";

let User = (props) => {
    return (
        <main>
             <Pagination onPageChangeFunc = {props.onPageChangeFunc}
                         currentPage ={props.currentPage}
                         totalUsersCount ={props.totalUsersCount}
                         pageSize ={props.pageSize}/>

            {props.isLoading
                ? <Loader/>    // hooks page  chpetqa refresh lini
                : <div className={c.usersNumberDiv}>
                {props.users.map((u, i) => <div key={i} className={c.itemNumberDiv}>
                    <div className={c.images}>
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
            }

        </main>
    )
};
export default User;