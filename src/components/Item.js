import React, { Component } from 'react';
import './Item.css';
const handleCheck=(value,propFunc)=>{
    propFunc(value);
};
const  Item =(props)=> {
    const { item,onRemove,onCheckOff } = props;
    return (
        <article className="Item">
            <label htmlFor={item.id}>
                <input
                    type="checkbox"
                    checked={item.packed}
                    onChange={()=>{handleCheck(item,onCheckOff)}}
                    id={item.id}
                />
                {item.value}
            </label>
            <button className="Item-remove" onClick={()=>{onRemove(item)}}>
                Remove
            </button>
        </article>
    );
};

export default Item;
