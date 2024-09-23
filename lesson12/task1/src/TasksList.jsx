import React, { Component } from "react";
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

// { text: 'Buy milk', done: false, id: 1 },
// { text: 'Pick up Tom from airport', done: false, id: 2 },
// { text: 'Visit party', done: false, id: 3 },
// { text: 'Visit doctor', done: true, id: 4 },
// { text: 'Buy meat', done: true, id: 5 },

const baseUrl = 'https://66efde95f2a8bce81be46357.mockapi.io/tasks';
// const baseUrl = 'https://crudcrud.com/api/b28c309995ee4a499bdbb5873730c1dc/tasks';

class TasksList extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        this.fetchTasksList();
    }

    fetchTasksList = () => {
        fetch(baseUrl).then(res => {
            if (res.ok) {
                return res.json();
            }
        })
            .then(tasksList => {
                this.setState({
                    tasks: tasksList,
                });
            })
    }

    onCreate = text => {
        // const { tasks } = this.state;
        const newTask = {
            // id: Math.random(),
            text,
            done: false,
        }

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;utc-8'
            },
            body: JSON.stringify(newTask)
        }).then(response => {
            if (response.ok) {
                this.fetchTasksList();
            } else {
                throw new Error('Failed to create task');
            }
        });

        // const updatedTasks = tasks.concat(newTask);

        // this.setState({
        //     tasks: updatedTasks
        // })
    }

    handleTaskStatusChange = id => {
        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }
            return task;
        })
        this.setState({ tasks: updatedTasks });
    }

    handleTaskDelete = id => {
        const updatedTasks = this.state.tasks
            .filter(task => task.id !== id)
        this.setState({ tasks: updatedTasks })
    }

    render() {
        const sortedList = this.state.tasks
            .slice()
            .sort((a, b) => a.done - b.done);
        return (
            <main className="todo-list">
                <CreateTaskInput onCreate={this.onCreate} />
                <ul className="list">
                    {sortedList.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onChange={this.handleTaskStatusChange}
                            onDelete={this.handleTaskDelete}
                        />
                    ))}
                </ul>
            </main>
        )
    }
}

export default TasksList;