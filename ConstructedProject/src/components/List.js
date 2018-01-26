/**
 * Created by didi on 2017.01.25
 **/
import React from 'react';

const List = (props) => {
    const list = props.listItems.map((item, i)=>(
        <li style={styleDes.liStyle} key={i}>
            <div
                style={
                    item.done
                        ? styleDes.divNoneStyle
                        : styleDes.divStyle
                }
                onClick={() => props.onListItemClick(i)}
            >{item.val}</div>
            <button onClick={() => props.deleteListItem(i)} className="btn btn-danger">x</button>
        </li>
    ));
    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
};

const styleDes = {
    liStyle: {
        margin: '20px 0'
    },
    divNoneStyle: {
        textDecoration: 'none',
        fontSize: '20px',
        width: 350,
        display: 'inline-block'
    },
    divStyle: {
        textDecoration: 'line-through',
        fontSize: '20px',
        width: 350,
        display: 'inline-block'
    }
};

export default List;