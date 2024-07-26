import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');


const element = (
    <>
        <h1 className="title">Todo List</h1>
        <main className="todoList">
            <div className="actions">
                <input className="taskInput" type="text" />
                <button className="btn createTaskBtn">Create</button>
            </div>
            <ul className="list"></ul>
        </main>
    </>
);

ReactDOM.render(element, rootElement);