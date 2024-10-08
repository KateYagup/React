import React from "react";
import classNames from 'classnames';

const Task = ({ id, text, done, onChange, onDelete }) => {
    // const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
    // const listItemClasses = classNames('list-item', { 'list-item_done': done });

    return (
        <li className={classNames('list-item', { 'list-item_done': done })}>
            <input
                type="checkbox"
                className="list-item__checkbox"
                defaultChecked={done}
                onChange={() => onChange(id)}
            />
            <span className="list-item__text">
                {text}
            </span>
            <button
                className="list-item__delete-btn"
                onClick={() => onDelete(id)}
            ></button>
        </li >
    )
}

export default Task;