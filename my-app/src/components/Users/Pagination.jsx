import React,{useState} from "react";
import cn from "classnames";
import c from "./Users.module.css";

let Pagination =(props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return(
        <div className={cn(c.paginator)}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return (
                        <span className={cn({
                            [c.selectedPage]: props.currentPage === p
                        }, c.pageNumber)}
                              key={i}
                              onClick={(event) => {props.onPageChangeFunc(p);
                              }}>{p}</span>
                    )
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
};
export default Pagination