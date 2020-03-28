import React, {useState} from "react";
import cn from "classnames";
import c from "./Users.module.css";

let  Pagination =  props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);

    let [countHooks, setHooks] = useState(1);

    let leftPortionPageNumber = (countHooks - 1) * portionSize + 1;
    let rightPortionPageNumber = countHooks * portionSize;

    return(
        <div className={c.paginator}>
            {countHooks > 1 &&
            <button className={c.prevButton} onClick={() => {
                setHooks(countHooks - 1)
            }}>PREV</button>}
            <div className={c.containerSelected}>
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return (
                        <span className={cn({[c.selectedPage] : props.currentPage === p}, c.pageNumber)}
                              key={i}
                              onClick={() => {props.onPageChangeFunc(p);
                              }}>{p}</span>
                    )
                })}
            </div>

            {portionCount > countHooks &&
            <button className={c.nextButton} onClick={() => {
                setHooks(countHooks + 1)
            }}>NEXT</button>}
        </div>
    )
};
export default Pagination
