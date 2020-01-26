import React from 'react';
import {Task, TaskProps} from "../Task/Task";

export interface TaskListProps {
    name: string;
    tasks: TaskProps[];
}

export class TaskList extends React.Component<TaskListProps> {

    public render(): JSX.Element {

        return (
            <>
                <div id="task-list-name">{this.props.name}</div>
                <div id="task-list-body">
                    {this.props.tasks.map((task, index) => (
                        <Task key={index} title={task.title} description={task.description} dueDate={task.dueDate}/>
                    ))}
                </div>
            </>

        );
    }

}